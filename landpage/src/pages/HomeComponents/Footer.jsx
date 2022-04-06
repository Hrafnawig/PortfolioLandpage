import React from 'react';
import logo from '../../media/footer/image 1.png'
import './common.scss';
import './footer.scss';
import useWindowSize from "../../utils/useWindowSize";

const Footer = () => {
    const [clicked, setClick]= React.useState(false)
    const [email, changeEmail]=React.useState('')
    const [attention, upAttention] =React.useState(false)
    const { width } = useWindowSize();
    const subscribe=()=>{
     if(email!==''){
         setClick(true)
         upAttention(false)
     }
     else{
         upAttention(true)
     }
    }

    return (
        <div className='center'>
            {width > 360 && (
                <>
         <div className='centerColumn footer'>
             <div>
                 <div><img src={logo}/></div>
                 <div className='footerIMtxt'>Bon Hotels Head Office</div>
                 <div id="footer" className='footerItxt'>+27 434 344 432
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
                 <input
                     className={clicked? 'hidden' : `center subscribeInput ${attention? 'warn'  : ''}` }
                     name="search"
                     placeholder="               Email Address!"
                     type="search"
                     onChange={event => changeEmail(event.target.value)}
                 />
                 <div className={attention? 'warning'  : 'hidden'}>You should provide email!</div>
                 <div className={clicked? 'hidden' : 'center subscribeBut'} onClick={subscribe}>Subscribe  Now</div>
                 <div className={clicked? 'subscribeText': 'hidden'}>You already our subscriber!</div>
             </div>
         </div>
                </>)}
            {width <= 360 && (
                <>
                    <div className='centerColumn footer'>
                        <div className='centerColumn '>
                            <div className='upperBlock'>
                                <div className='footerTxt'>Our Hotels</div>
                                <div className='footerTxt'>Our Conferencing</div>
                                <div className='footerTxt'>Our Company</div>
                                <div className='footerTxt'>Hotel Design</div>
                                <div className='footerTxt'>Careers</div>
                            </div>
                            <div className='unique distance'>
                                <div className='footerIMtxt'>Bon Hotels Head Office</div>
                                <div id="footer" className='footerItxt'>+27 434 344 432
                                    info@bonhotels.com</div>
                            </div>
                            <div className='distance'>
                                <div className='subscribeText'>Subscribe for Offers</div>
                                <input
                                    className={clicked? 'hidden' : `center subscribeInput ${attention? 'warn'  : ''}` }
                                    name="search"
                                    placeholder="               Email Address!"
                                    type="search"
                                    onChange={event => changeEmail(event.target.value)}
                                />
                                <div className={attention? 'warning'  : 'hidden'}>You should provide email!</div>
                                <div className={clicked? 'hidden' : 'center subscribeBut'} onClick={subscribe}>Subscribe  Now</div>
                                <div className={clicked? 'subscribeText': 'hidden'}>You already our subscriber!</div>
                            </div>
                        </div>
                    </div>
                </>)}
        </div>
    );
};
export default Footer;