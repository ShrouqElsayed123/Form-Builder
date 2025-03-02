import React from 'react'
import styles from './ForgetPassword.module.css'
import forgetimg from '../../assets/imgs/Forgot password2.png'
export default function ForgetPassword() {
  return (
 <>
 <div className={styles.forgetpassword}>
   <div className="container">
   <div className="card  m-auto" >
   <div className="row g-0">
     <div className="col-md-5 border-end">
       <img src={forgetimg} className="img-fluid rounded-start" alt="login image illustration" />
     </div>
     <div className="col-md-7">
       <div className="card-body">
         <h5 className="card-title">Forget Your Password!</h5>
         
 
         {/* //////////////////form  */}
         <div className="form-content text-start">
          <form action="">
 
             {/* //email input  */}
          <div className='email'>
       <label>E-mail</label>
       <br />
       <input type="email" className="w-100"
       name='email' placeholder='Enter your Email'/>
       </div>
            
       <div className='Form-button w-100'>
       <button type="submit" className='btn w-100 '>Reset Password</button>
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
