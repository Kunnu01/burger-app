import React from 'react'
import styles from './BuildControls.module.css';
import BuildControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
    <div className={styles.BuildControls}>
        <p style={{color: 'white'}}>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            disabled={props.purchasable}
            className={styles.OrderButton}
            onClick={props.ordered}
        >
                ORDER NOW
        </button>
    </div>
);

export default BuildControls;