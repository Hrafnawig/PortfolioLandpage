import React from 'react';
import taxi from '../../media/taxi.png';
import wifi from '../../media/wifi.png';
import pool from '../../media/pool.png';
import gym from '../../media/gym.png';
import kitchen from '../../media/kitchen.png';
import styles from './styles.module.scss';
const Facilities = () => {
    return (
        <div className={styles.center}>
            <div className={`${styles.facilities} ${styles.centerColumn}`}>
                <div className={styles.facText}>Facilities</div>
                <div className={styles.facServices}>
                    <div className={styles.centerColumn}>
                        <div><img src={kitchen}/></div>
                        <div className={styles.facServiceTxt}>Kitchen</div>
                    </div>
                    <div className={styles.centerColumn}>
                        <div><img src={pool}/></div>
                        <div className={styles.facServiceTxt}>Pool</div>
                    </div>
                    <div className={styles.centerColumn}>
                        <div><img src={wifi}/></div>
                        <div className={styles.facServiceTxt}>Wifi</div>
                    </div>
                    <div className={styles.centerColumn}>
                        <div><img src={gym}/></div>
                        <div className={styles.facServiceTxt}>Gym</div>
                    </div>
                    <div className={styles.centerColumn}>
                        <div><img src={taxi}/></div>
                        <div className={styles.facServiceTxt}>Taxi</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Facilities;