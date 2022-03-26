import React from 'react';
import logo from '../../media/title/download 1.png'
import search from '../../media/title/bi_search.png'
import './title.scss';
import './common.scss'
const Title = () => {
    const [clicked, setClick] = React.useState(false)
    // if(window.location.reload){
    //     window.location.replace("http://localhost:3000/")
    // } freezes webpage
    return (
        <div>
            <div className='center'><img className='logo' src={logo}/></div>
            <div className='center'>
                <div className='center'>
                    <a href="#ourHotel">
                        <div className='space'>Our Hotel</div>
                    </a>
                    <a href='#rooms'>
                        <div className='space'>Room & Rates</div>
                    </a>
                    <a href="#facilities">
                        <div className='space'>Facilities</div>
                    </a>
                    <a href="#footer">
                        <div className='space'>Contact Us</div>
                    </a>
                    <div className='space'><img onClick={()=>setClick(true)} src={search}/></div>
                </div>
            </div>
            <div className={clicked? 'hidden' : undefined}> Search everything! </div>
        </div>
    );
};
export default Title;
