import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const Burger = (props) => {

    const { ingredients } = props;
    let transformedIngredients = Object.keys(ingredients)
        .map(item => (
            [...Array(ingredients[item])].map((_, i) => {
                return <BurgerIngredient key={item+i} type={item} />
            })
        ))
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;