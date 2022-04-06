import React from 'react';
import taxi from '../../media/facilities/taxi.png';
import wifi from '../../media/facilities/wifi.png';
import pool from '../../media/facilities/pool.png';
import gym from '../../media/facilities/gym.png';
import kitchen from '../../media/facilities/kitchen.png';
import './common.scss';
import './facilities.scss';

const Facilities = () => {
    return (
        <div className='center'>
            <div id='facilities' className='facilities centerColumn'>
                <div className='facText'>Facilities</div>
                <div className='facServices'>
                    <div className='centerColumn'>
                        <div><img src={kitchen}/></div>
                        <div className='facServiceTxt'>Kitchen</div>
                    </div>
                    <div className='centerColumn'>
                        <div><img src={pool}/></div>
                        <div className='facServiceTxt'>Pool</div>
                    </div>
                    <div className='centerColumn'>
                        <div><img src={wifi}/></div>
                        <div className='facServiceTxt'>Wifi</div>
                    </div>
                    <div className='centerColumn'>
                        <div><img src={gym}/></div>
                        <div className='facServiceTxt'>Gym</div>
                    </div>
                    <div className='centerColumn'>
                        <div><img src={taxi}/></div>
                        <div className='facServiceTxt'>Taxi</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Facilities;