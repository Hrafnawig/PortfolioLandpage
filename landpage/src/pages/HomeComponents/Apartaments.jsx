import React from 'react';
import styles from './styles.module.scss';
const Rooms = () => {
    return (
        <div className={styles.centerColumn}>
         <div className={styles.roomsTxt}>Rooms & Rates</div>
            <div className={styles.rooms}>
                <div className={`${styles.twinRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard Twin Room</div>
                    <div>Check Rates</div>
                </div>
                <div className={`${styles.standartRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard Room</div>
                    <div>Check Rates</div>
                </div>
                <div className={`${styles.viewRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Standard View Room</div>
                    <div>Check Rates</div>
                </div>
                <div className={`${styles.deluxeRoom} ${styles.centerColumn}`}>
                    <div className={styles.roomdesc}>Deluxe Room</div>
                    <div>Check Rates</div>
                </div>
            </div>
        </div>
    );
};
export default Rooms;