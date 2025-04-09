import EditBreadcrumbs from "../EditBreadcrumbs/EditBreadcrumbs";

import {  useFormik } from 'formik'
// import './Signup.css'
import './EditUser.css'
import axios from 'axios'
import { object, ref, string } from 'yup'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import {  useParams } from 'react-router-dom'
export default function EditUser() {
  const [user, setUser] = useState({});

    let {id}=useParams()
// console.log(id);
// المسئولة عن احضار بيانات المسخدم 
async function getUsers() {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/user/showbyid/${id}`);
    let newUser = data[0]; 
    setUser(newUser);
    console.log(user);
    
  } catch (error) {
    console.error("Error fetching user", error);
  }
}
  
  
  // const navigate=useNavigate()
  const [accountExitMessage,setAccountExitMessage]=useState(null)


// this id yup validation /////////////////////////////////
const validationSchema=object({
  name:string().required(),
  email:string().required().email(),
  password:string().required(),
//   matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  rePassword:string().required().oneOf([ref("password")]),
  
})

async function sendDataToSignup (values) {
 const loadingId= toast.loading("data sending .....")
  try{
    const options={
      url:`http://127.0.0.1:8000/api/user/update/${id}`,
      method:"POST",
      data:values
    }
   let {data}= await axios.request(options)
  console.log(data);
  
  
  }
  catch(error){
    toast.dismiss(loadingId)
setAccountExitMessage(error.response.data.message)

  }
 
} 
const formik = useFormik({
  enableReinitialize: true,
  initialValues: {
    name: user.name || "",
    email: user.email || "",
    password: "",
    password_confirmation: "",
  },
  validationSchema,
  onSubmit: sendDataToSignup,
});

  useEffect(() => {
    getUsers();
  }, [id]);
  
  return (
    <>
  
   <div className="signup p-5">
    <EditBreadcrumbs />
   <div className="container">
   
   {/* <h3 className='mb-3'>Register Now</h3> */}
   <form onSubmit={formik.handleSubmit}>

    {/* ///////////////////////name////// */}
    <div className='name'>
      <label>name:</label>
      <br />
      <input type="text" className="w-100 p-1 border-1 border-light-subtle rounded-2 outline-0"
      name='name'
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.name && formik.touched.name && (<p className="text-danger">{formik.errors.name}</p>)}
    </div>
    {/* ///////////////////////email////// */}

    <div className='email'>
      <label>E-mail</label>
      <br />
      <input type="email" className="w-100 p-1 border-1 border-light-subtle rounded-2 outline-0"
      name='email'
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.email && formik.touched.email && (<p className="text-danger">{formik.errors.email}</p>)}
    <p className='text-danger'>{accountExitMessage}</p>
    </div>
    {/* ///////////////////////password////// */}

    <div className='password'>
      <label>Password</label>
      <br />
      <input type="password" className="w-100 p-1 border-1 border-light-subtle rounded-2 outline-0"
      name='password'
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.password && formik.touched.password && (<p className="text-danger">{formik.errors.password}</p>)}
    </div>
    {/* ///////////////////////RePassword////// */}

    <div className='re-password'>
      <label>Re-Password</label>
      <br />
      <input type="password" className="w-100 p-1 border-1 border-light-subtle rounded-2 outline-0"
      name='rePassword'
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.rePassword && formik.touched.rePassword && (<p className="text-danger">{formik.errors.rePassword}</p>)}
    </div>


   

    <div className='Form-button w-100'>
      <button type="submit" className='btn w-100'>Update</button>
    </div>
   </form>
   </div>
   </div>
    </>
  )


  
}