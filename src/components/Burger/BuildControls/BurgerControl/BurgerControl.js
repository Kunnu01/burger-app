import React from 'react';
import styles from './BurgerControl.module.css';

const BuildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button 
            onClick={props.removed}
            className={styles.Less}
            disabled={props.disabled}
        >
            Less
        </button>
        <button onClick={props.added} className={styles.More}>More</button>
    </div>
)

export default BuildControl;