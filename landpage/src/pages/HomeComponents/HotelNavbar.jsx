import React from 'react';
import arrow from '../../media/arrow.png';
import calendar from '../../media/calendar.png';
import styles from './styles.module.scss';
const Navbar = () => {
    return (
            <div className={styles.center}>
                <div className={`${styles.HotelsSearch} ${styles.center} ${styles.InputRow}`}>
                    <div className={`${styles.form} ${styles.center}`}>Select a City <div className={styles.spaceItem}>
                        <img src={arrow}/></div></div>
                    <div className={`${styles.form} ${styles.center}`}>Check In <div className={styles.spaceCalendar}>
                        <img src={calendar}/></div></div>
                    <div className={`${styles.form} ${styles.center}`}>Check Out <div className={styles.spaceCalendar}>
                        <img src={calendar}/></div></div>
                    <div className={`${styles.AvailableBut} ${styles.center}`}>Check Availability</div>
                </div>
            </div>
    );
};
export default Navbar;