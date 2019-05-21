import React from 'react'
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.clicked} />
        <div className={styles.Logo}>
            <Logo />
        </div>
        <div className={styles.DesktopOnly}>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </header>
)

export default Toolbar;