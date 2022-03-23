import React from 'react';
import styles from './styles.module.scss';
const MainPic = () => {
    return (
        <div className={styles.center}>
            <div className={`${styles.centerColumn} ${styles.MainPic}`}>
                <div className={styles.welcomingPhrase}>WELCOME TO BON HOTEL</div>
                <div className={styles.mainText}>Good people. Good thinking. Good feeling.</div>
                <div className={`${styles.center} ${styles.exploreBut}`}>EXPLORE</div>
            </div>
        </div>
    );
};
export default MainPic;