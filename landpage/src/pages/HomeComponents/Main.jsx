import React from 'react';
import './common.scss';
import './main.scss';
import {Link} from "react-router-dom";
const MainPic = () => {
    return (
        <div id="ourHotel" className='center'>
            <div className='centerColumn MainPic' >
                <div className='welcomingPhrase'>WELCOME TO BON HOTEL</div>
                <div className='mainText'>Good people. Good thinking. Good feeling.</div>
                <Link to="/explore"><div className='center exploreBut'>EXPLORE</div></Link>
            </div>
        </div>
    );
};
export default MainPic;