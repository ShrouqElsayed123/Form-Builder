
import {  useFormik } from 'formik'
import './AddUser.css'
import axios from 'axios'
import { object, ref, string } from 'yup'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AddBreadcrumbs from '../AddBreadcrumbs/AddBreadcrumbs'

export default function AddUser() {
  const navigate=useNavigate()
  const [accountExitMessage,setAccountExitMessage]=useState(null)

const validationSchema=object({
  name:string().required(),
  email:string().required().email(),
  password:string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  password_confirmation:string().required().oneOf([ref("password")]),

})

async function sendDataToSignup (values) {
 const loadingId= toast.loading("data sending .....")
  try{
    const options={
      url:"http://127.0.0.1:8000/api/register",
      method:"POST",
      data:values
    }
   let data1= await axios.request(options)
   if(data1.status===200){
    toast.dismiss(loadingId)
    toast.success("User Created Successfully");
    setTimeout(()=>{navigate("/formpage/usertable")},2000)
   }
   console.log(data1);
   console.log(data1.status);
  }
  catch(error){
    toast.dismiss(loadingId)
setAccountExitMessage(error.response.data.message)

  }
 
} 
const formik =useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
   
  },
  validationSchema,
  onSubmit:sendDataToSignup
})
  
  return (
    <>
   <div className="signup p-5">
    <AddBreadcrumbs />
   <div className="container">
   {/* <h3 className='mb-3'>Add New User</h3> */}
   <form onSubmit={formik.handleSubmit}>

     {/* ///////////////////////name////// */}
     <div className='name'>
      <label>name:</label>
      <br />
      <input type="text" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
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
      <input type="email" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
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
      <input type="password" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
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
      <input type="password" className="w-100 border-1 border-light-subtle rounded-2 outline-0"
      name='password_confirmation'
      value={formik.values.password_confirmation}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.errors.password_confirmation && formik.touched.password_confirmation && (<p className="text-danger">{formik.errors.password_confirmation}</p>)}
    </div>

    <div className='Form-button w-100'>
      <button type="submit" className='btn w-100'>Add User</button>
    </div>
   </form>
   </div>
   </div>
    </>
  )
}
