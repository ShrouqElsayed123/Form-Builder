import styles from './Navbar.module.css'
import logo  from '../../assets/imgs/Logo.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
   <div className={styles.mainNavbar}>
   <nav className="navbar navbar-expand-lg ">
  <div className="container d-flex justify-content-between">
    <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
    <img src={logo} alt="Logo" width="80"  className="d-inline-block align-text-top"/>
      <span className='fs-4 fw-bold'>MNU Form Builder</span>
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
      <ul className="navbar-nav">
       <NavLink to="/login" className=' mainbtn'>Log In</NavLink>
      </ul>
    </div>
  </div>
</nav>

   </div>
   </>
  )
}
