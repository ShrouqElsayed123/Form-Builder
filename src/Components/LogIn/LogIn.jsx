import styles from './LogIn.module.css'
import loginimg from '../../assets/imgs/Login.png'
import {  useFormik } from 'formik'
// import '../Signup/Signup.css'
import axios from 'axios'
import { object, string } from 'yup'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../Context/User.context'
// import { useContext, useState } from 'react'
// import { tokenContext } from '../../components/context/User.context'

export default function LogIn() {
  let {setToken}=useContext(userContext)


  // let {setToken}=useContext(tokenContext)
  let [dataError,setDataError]=useState(null)
  const navigate=useNavigate()

const validationSchema=object({
  
  email:string().required().email(),
  password:string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
 
})

async function sendDataToLogin (values) {
 const loadingId= toast.loading("data sending .....")
  try{
    const options={
      url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
      method:"POST",
      data:values
    }
   let {data}= await axios.request(options)
   if(data.message=="success"){
   setToken(data.token)
    localStorage.setItem("token",data.token)
    toast.success("You Login Successfully");
    
    setTimeout(()=>{navigate("/userdashboard")},20)
   }
   console.log(data);
  }
  catch(error){
    setDataError(error.response.data.message)
   toast.error(error.response.data.message)

  }
 finally  {
  toast.dismiss(loadingId)

 }
} 
const formik =useFormik({
  initialValues:{
   
    email:"",
    password:"",
   
  },
  validationSchema,
  onSubmit:sendDataToLogin
})
  return (
   <>
  <div className={styles.login}>
  <div className="container">
  <div className="card  m-auto" >
  <div className="row g-0">
    <div className="col-md-5 border-end">
      <img src={loginimg} className="img-fluid rounded-start" alt="login image illustration" />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Welcome Back!</h5>
        <p className="card-text">
        Collect information with custom online forms.
        </p>


        {/* //////////////////form  */}
        <div className="form-content text-start">
      

         <form onSubmit={formik.handleSubmit}>

  
{/* ///////////////////////email////// */}

<div className='email'>
  <label>E-mail</label>
  <br />
  <input type="email" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
  name='email'
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}/>
  {formik.errors.email && formik.touched.email && (<p className="text-danger">{formik.errors.email}</p>)}

</div>
{/* ///////////////////////password////// */}

<div className='password'>
  <label>Password</label>
  <br />
  <input type="password" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
  name='password'
  value={formik.values.password}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}/>
  {formik.errors.password && formik.touched.password && (<p className="text-danger">{formik.errors.password}</p>)}
</div>
{/* ///////////////////////RePassword////// */}
<p className='text-danger'>{dataError}</p>


<div className='Form-button w-100'>
  <button type="submit" className='btn w-100'>Log In</button>
</div>
</form>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>

  </div>
   </>
  )
}
