import React from 'react';
import logo from '../../media/footer/image 1.png'
import './common.scss';
import './footer.scss';
const Footer = () => {
    return (
        <div className='center'>
         <div className='centerColumn footer'>
             <div>
                 <div><img src={logo}/></div>
                 <div className='footerIMtxt'>Bon Hotels Head Office</div>
                 <div className='footerItxt'>+27 434 344 432
                     info@bonhotels.com</div>
             </div>
             <div><div className='footerTxt'>Our Hotels</div>
                 <div className='footerTxt'>Our Conferencing</div>
                 <div className='footerTxt'>Our Company</div>
                 <div className='footerTxt'>Hotel Design</div>
                 <div className='footerTxt'>Careers</div>
             </div>
             <div>
                 <div className='subscribeText'>Subscribe for Offers</div>
                 <div className='center subscribeInput'>Email Address</div>
                 <div className='center subscribeBut'>Subscribe  Now</div>
             </div>
         </div>
        </div>
    );
};
export default Footer;