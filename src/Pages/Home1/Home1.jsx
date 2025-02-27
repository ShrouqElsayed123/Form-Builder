import styles from './Home1.module.css'
import homeimg from '../../assets/imgs/homeimg.png'
export default function Home1() {
  return (
    <>
    <div className={styles.home1}>
      <div className="container">
        <div className="home1-txt m-auto">
            <h6 className='fw-bold '>EASIEST ONLINE FORM BUILDER</h6>
            <h2 className='fs-2 fw-bold'>Powerful forms get it done.</h2>
            <img src={homeimg} className='w-25' alt='Home page image'/>
            <p className='w-50 text-center fs-6 fw-medium'>We believe the right form makes all the difference. Go from busywork to less work with powerful forms that use conditional logic</p>
        </div>
      </div>
    </div>
    
    </>
  )
}
