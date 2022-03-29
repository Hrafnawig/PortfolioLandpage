import React from 'react';
import Calendar from 'react-calendar';
import arrow from '../../media/hotelNavbar/arrow.png';
import calendar from '../../media/hotelNavbar/calendar.png';
import './common.scss';
import './hotelNavbar.scss'
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';
import {Link} from "react-router-dom";

const Navbar = () => {
    Moment.locale('en');
    const [clicked, setClick] = React.useState(0)
    const [city, setCity] = React.useState('Select a City')
    const [dateIn, setDateIn] = React.useState(new Date())
    const [dateOut, setDateOut] = React.useState(new Date())
    const [dIstatus, startMachine] = React.useState(false)
    const [dOstatus, startMac] = React.useState(false)
    const ChangeCityAndHide =(city) =>{
        setCity(city);
        setClick(0);
    }
    const ChangeDateAndHide =(value) =>{
        setDateIn(value);
        setClick(0);
        startMachine(true);
    }
    const ChangeOutDateAndHide =(value) =>{
        setDateOut(value);
        setClick(0);
        startMac(true);
    }
    const cityToggle = (prevState)=>{
        if(prevState===0){
            setClick(1);
        }
        else{
            setClick(0);
        }
    }
    const calendarToggleIn = (prevState)=>{
        if(prevState===0){
            setClick(2);
        }
        else{
            setClick(0);
        }
    }
    const calendarToggleOut = (prevState)=>{
        if(prevState===0){
            setClick(3);
        }
        else{
            setClick(0);
        }
    }
    return (
        <div className='centerColumn'>
            <div className='InputRow center upperNavbar'>
                <div className='form center' onClick={() => setClick(prevState => cityToggle(prevState))}>{city}
                    <div className='spaceItem'>
                        <img className={clicked===1 ? 'rotate' : undefined} src={arrow}/></div>
                </div>
                <div className='form center' onClick={() => setClick(prevState => calendarToggleIn(prevState))}>
                    {dIstatus ? Moment(dateIn).format('DD MMM'): 'Check In' }
                    <div className='spaceCalendar'>
                        <img src={calendar}/></div></div>
                <div className='form center' onClick={() => setClick(prevState => calendarToggleOut(prevState))}>
                    {dOstatus ? Moment(dateOut).format('DD MMM'): 'Check Out' }
                    <div className='spaceCalendar'>
                        <img src={calendar}/></div></div>
                <Link to= "/available"><div className='AvailableBut center'>Check Availability</div></Link>
            </div>
            <div className='InputRow dropMenuGlobal'>
                <div className={clicked === 1 ? 'centerColumn city' : 'hidden'}>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('TundraByen')}>TundraByen</div>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('DesertStan')}>DesertStan</div>
                    <div className='form dropMenu' onClick={() => ChangeCityAndHide('ForestStadt')}>ForestStadt</div>
                </div>
                <div className={clicked === 2 ? 'calendarIn' : 'hidden'}>
                    <Calendar className='dropMenu' onChange={ChangeDateAndHide} value={dateIn}/>
                </div>
                <div className={clicked === 3 ? 'calendarOut' : 'hidden'}>
                    <Calendar className='dropMenu' onChange={ChangeOutDateAndHide} value={dateOut}/>
                </div>
            </div>
        </div>
    );
};
export default Navbar;