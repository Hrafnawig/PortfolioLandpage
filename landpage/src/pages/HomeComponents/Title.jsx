import React from 'react';
import logo from '../../media/title/download 1.png'
import search from '../../media/title/bi_search.png'
import './title.scss';
import './common.scss'
const Title = () => {
    return (
        <div>
            <div className='center'><img className='logo' src={logo}/></div>
            <div className='center'>
                <div className='center'>
                    <div className='space'>Our Hotel</div>
                    <div className='space'>Room & Rates</div>
                    <div className='space'>Facilities</div>
                    <div className='space'>Contact Us</div>
                    <div className='space'><img src={search}/></div>
                </div>
            </div>
        </div>
    );
};
export default Title;
