import styles from './LogIn.module.css'
import loginimg from '../../assets/imgs/Login.png'
export default function LogIn() {
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
         <form action="">

            {/* //email input  */}
         <div className='email'>
      <label>E-mail</label>
      <br />
      <input type="email" className="w-100"
      name='email'placeholder='Enter your Email' />
      </div>
            {/* //password input  */}
         <div className='password'>
      <label>Password</label>
      <br />
      <input type="password" className="w-100 "
      name='password' placeholder='Enter your Password'/>
      <div className="form-text text-end pt-1">
        <a href="/forgetpassword"> Forget Password?</a>
      </div>
      </div>
      <div className='Form-button w-100'>
      <button type="submit" className='btn w-100 '>LogIn</button>
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
