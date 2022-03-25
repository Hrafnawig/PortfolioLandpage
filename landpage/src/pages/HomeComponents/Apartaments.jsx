import React from 'react';
import './common.scss';
import './apartaments.scss';
const Rooms = () => {
    return (
        <div id='rooms' className='centerColumn'>
         <div className='roomsTxt'>Rooms & Rates</div>
            <div className='rooms'>
                <div className='twinRoom centerColumn'>
                    <div className='roomdesc'>Standard Twin Room</div>
                    <div className='roomBut center'>Check Rates</div>
                </div>
                <div className='standartRoom centerColumn'>
                    <div className='roomdesc'>Standard Room</div>
                    <div className='roomBut center'>Check Rates</div>
                </div>
                <div className='viewRoom centerColumn'>
                    <div className='roomdesc'>Standard View Room</div>
                    <div className='roomBut center'>Check Rates</div>
                </div>
                <div className='deluxeRoom centerColumn'>
                    <div className='roomdesc'>Deluxe Room</div>
                    <div className='roomBut center'>Check Rates</div>
                </div>
            </div>
            <div className='bookTxt'>Get a room already!</div>
            <div className='bookBut centerColumn'>Book Now</div>
        </div>
    );
};
export default Rooms;