import facebook from '../../assets/imgs/facebook.png'
import youtube from '../../assets/imgs/youtube.png'
import gmail from '../../assets/imgs/gmail.png'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div className={styles.mainFooter}>
    <footer className='card-footer'>
        <div className="footer-icons d-flex align-items-center justify-content-center gap-4" height="100px">
            <div>
                <img src={facebook}/>
            </div>
           <div> <img src={youtube}/></div>
           <div><img src={gmail} /></div>
        </div>
        <div className='footer-txt  fw-medium '>
          <p>All rights reserved © 2025 Information Technology Unit - Menoufia National University</p>
        </div>
    </footer>
    </div>
   
    </>
  )
}
