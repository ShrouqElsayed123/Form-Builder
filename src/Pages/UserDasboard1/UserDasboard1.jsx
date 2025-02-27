import styles from './UserDasboard1.module.css'
import homeimg from '../../assets/imgs/homeimg.png'
import { NavLink } from 'react-router-dom';
export default function UserDasboard1() {
  return (
    <>
    <div className={styles.UserDasboard1}>
      <div className='container'>
        <img src={homeimg} alt="home image illustration" className='w-25'/>
        <h3 className='fw-bold'>YOU DO NOT HAVE ANY FORMS YET</h3>
        <p>Your forms will appear here.</p>
        <NavLink to='/userdashboard2' className='mainbtn text-decoration-none'>Create Form</NavLink>
      </div>

    </div>
    </>
  )
}
