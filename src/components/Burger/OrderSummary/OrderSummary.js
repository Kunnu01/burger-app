import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const { ingredients, purchaseCanceled, purchaseContinued } = props;
    const ingredientSummary = Object.keys(ingredients)
        .map(item => (
                <li key = {item}>
                <span style={{textTransform: 'capitalize'}}>
                    {item}
                </span>: {ingredients[item]}</li>)   
        )
    return (
        <>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={purchaseCanceled} btnType='Danger'>CANCEL</Button>
            <Button clicked={purchaseContinued} btnType='Success'>CONTINUE</Button>
        </>
    );
}

export default OrderSummary;