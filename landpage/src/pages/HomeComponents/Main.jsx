import React from 'react';
import './common.scss';
import './main.scss';
import {Link} from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
const MainPic = () => {
    const { width } = useWindowSize();
    return (
        <div id="ourHotel" className='center'>
            {width > 360 && (
                <>
            <div className='centerColumn MainPic' >
                <div className='welcomingPhrase'>WELCOME TO BON HOTEL</div>
                <div className='mainText'>Good people. Good thinking. Good feeling.</div>
                <Link to="/explore"><div className='center exploreBut'>EXPLORE</div></Link>
            </div>
                </>)}
            {width < 360 && (
                <>
                    <div className='centerColumn MainPic' >
                        <div className='welcomingPhrase'>WELCOME TO BON HOTEL</div>
                        <div className='mainText'>Good people. Good thinking</div>
                        <div className='mainText'>Good feeling.</div>
                        <Link to="/explore"><div className='center exploreBut'>EXPLORE</div></Link>
                    </div>
                </>)}
        </div>

    );
};
export default MainPic;