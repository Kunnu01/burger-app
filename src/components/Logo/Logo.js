import React from 'react';
import BurgerLogo from '../../assets/Images/logo.png';
import styles from './Logo.module.css';

const Logo = (props) => (
    <div className={styles.Logo}>
        <img src={BurgerLogo} alt="Burger Builder" />
    </div>
);

export default Logo;