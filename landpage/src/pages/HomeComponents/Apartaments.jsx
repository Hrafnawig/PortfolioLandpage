import React from 'react';
import './common.scss';
import './apartaments.scss';
import {Link} from "react-router-dom";
const Rooms = () => {
    return (
        <div className='centerColumn'>
         <div className='roomsTxt' id='rooms'>Rooms & Rates</div>
            <div className='rooms'>
                <div className='twinRoom centerColumn'>
                    <div className='roomdesc'>Standard Twin Room</div>
                    <Link to='/rates'><div className='roomBut center'>Check Rates</div></Link>
                </div>
                <div className='standartRoom centerColumn'>
                    <div className='roomdesc'>Standard Room</div>
                    <Link to='/rates'><div className='roomBut center'>Check Rates</div></Link>
                </div>
                <div className='viewRoom centerColumn'>
                    <div className='roomdesc'>Standard View Room</div>
                    <Link to='/rates'><div className='roomBut center'>Check Rates</div></Link>
                </div>
                <div className='deluxeRoom centerColumn'>
                    <div className='roomdesc'>Deluxe Room</div>
                    <Link to='/rates'><div className='roomBut center'>Check Rates</div></Link>
                </div>
            </div>
            <div className='bookTxt'>Get a room already!</div>
            <Link to='/book'><div className='bookBut centerColumn'>Book Now</div></Link>
        </div>
    );
};
export default Rooms;