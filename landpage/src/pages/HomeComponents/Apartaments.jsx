import React from 'react';
import styles from './styles.module.scss';
const Rooms = () => {
    return (
        <div className={styles.centerColumn}>
         <div className={styles.roomsTxt}>Rooms & Rates</div>
            <div className={styles.rooms}>
                <div className={`${styles.twinRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard Twin Room</div>
                    <div className={`${styles.roomBut} ${styles.center}`}>Check Rates</div>
                </div>
                <div className={`${styles.standartRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard Room</div>
                    <div className={`${styles.roomBut} ${styles.center}`}>Check Rates</div>
                </div>
                <div className={`${styles.viewRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard View Room</div>
                    <div className={`${styles.roomBut} ${styles.center}`}>Check Rates</div>
                </div>
                <div className={`${styles.deluxeRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Deluxe Room</div>
                    <div className={`${styles.roomBut} ${styles.center}`}>Check Rates</div>
                </div>
            </div>
            <div className={styles.bookTxt}>Get a room already!</div>
            <div className={`${styles.bookBut} ${styles.centerColumn}`}>Book Now</div>
        </div>
    );
};
export default Rooms;