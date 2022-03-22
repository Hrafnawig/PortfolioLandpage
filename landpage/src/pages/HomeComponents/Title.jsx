import React from 'react';
import logo from '../../media/download 1.png'
import search from '../../media/bi_search.png'
import styles from './styles.module.scss';
const Title = () => {
    return (
        <div>
            <div className={styles.center}><img className={styles.logo} src={logo}/></div>
            <div className={styles.center}>
                <div className={styles.center}>
                    <div className={styles.space}>Our Hotel</div>
                    <div className={styles.space}>Room & Rates</div>
                    <div className={styles.space}>Facilities</div>
                    <div className={styles.space}>Contact Us</div>
                    <div className={styles.space}><img src={search}/></div>
                </div>
            </div>
        </div>
    );
};
export default Title;
