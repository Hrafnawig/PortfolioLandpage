import React from 'react';
import logo from '../../media/download 1.svg'
import styles from './styles.module.scss';
const Title = () => {
    return (
        <div className= {styles.title}>
         <img src={logo}/>
        </div>
    );
};
export default Title;
