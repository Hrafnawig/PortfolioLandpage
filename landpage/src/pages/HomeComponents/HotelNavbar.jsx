import React from 'react';
import Calendar from 'react-calendar';
import arrow from '../../media/hotelNavbar/arrow.png';
import calendar from '../../media/hotelNavbar/calendar.png';
import './common.scss';
import './hotelNavbar.scss'

const Navbar = () => {
    const [clicked, setClick] = React.useState(false)
    const [city, setCity] = React.useState('Select a City')
    const [value, changeData] = React.useState(new Date());
    const ChangeCityAndHide =(city) =>{
        setCity(city);
        setClick(false);
    }
    return (
        <div className='centerColumn'>
            <div className='InputRow center upperNavbar'>
                <div className='form center' onClick={() => setClick(prevState=>!prevState)}>{city}
                    <div className='spaceItem'>
                        <img className={clicked ? 'rotate' : undefined} src={arrow}/></div>
                </div>
                <div className='form center'>Check In <div className='spaceCalendar'>
                    <img src={calendar}/></div></div>
                <div className='form center'>Check Out <div className='spaceCalendar'>
                    <img src={calendar}/></div></div>
                <div className='AvailableBut center'>Check Availability</div>
            </div>
            <div className={clicked ? 'InputRow dropMenuGlobal' : 'hidden'}>
                <div className='centerColumn'>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('TundraBuen')}>TundraBuen</div>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('DesertStan')}>DesertStan</div>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('ForestStadt')}>ForestStadt</div>
                </div>
                <div>
                    <Calendar onChange={changeData} value={value} />
                </div>
            </div>
        </div>
    );
};
export default Navbar;