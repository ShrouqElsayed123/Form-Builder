import styles from './Navbar.module.css'
import logo  from '../../assets/imgs/Logo.png'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { useContext } from 'react'
import { userContext } from '../Context/User.context'
export default function Navbar() {
  let{logout,token}=useContext(userContext)
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
        {!token && <><li><NavLink to="/login" className=' mainbtn'>Log In</NavLink></li></>}
       {token && <><li onClick={logout }  ><NavLink to="/"><Avatar src="/broken-image.jpg"  /></NavLink></li></>}
       
      </ul>
    </div>
  </div>
</nav>

   </div>
   </>
  )
}
