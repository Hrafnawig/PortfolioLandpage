import React from 'react';
import styles from './styles.module.scss';
import logo from '../../media/image 1.png'
const Footer = () => {
    return (
        <div className={styles.center}>
         <div className={`${styles.centerColumn} ${styles.footer}`}>
             <div>
                 <div><img src={logo}/></div>
                 <div className={styles.footerIMtxt}>Bon Hotels Head Office</div>
                 <div className={styles.footerItxt}>+27 434 344 432
                     info@bonhotels.com</div>
             </div>
             <div><div className={styles.footerTxt}>Our Hotels</div>
                 <div className={styles.footerTxt}>Our Conferencing</div>
                 <div className={styles.footerTxt}>Our Company</div>
                 <div className={styles.footerTxt}>Hotel Design</div>
                 <div className={styles.footerTxt}>Careers</div>
             </div>
             <div>
                 <div className={styles.subscribeText}>Subscribe for Offers</div>
                 <div className={`${styles.center} ${styles.subscribeInput}`}>Email Address</div>
                 <div className={`${styles.center} ${styles.subscribeBut}`}>Subscribe  Now</div>
             </div>
         </div>
        </div>
    );
};
export default Footer;