import React from 'react';
import arrow from '../../media/hotelNavbar/arrow.png';
import calendar from '../../media/hotelNavbar/calendar.png';
import './common.scss';
import './hotelNavbar.scss'
const Navbar = () => {
    return (
            <div className='center'>
                <div className='InputRow center upperNavbar'>
                    <div className='form center'>Select a City <div className='spaceItem'>
                        <img src={arrow}/></div></div>
                    <div className='form center'>Check In <div className='spaceCalendar'>
                        <img src={calendar}/></div></div>
                    <div className='form center'>Check Out <div className='spaceCalendar'>
                        <img src={calendar}/></div></div>
                    <div className='AvailableBut center'>Check Availability</div>
                </div>
            </div>
    );
};
export default Navbar;