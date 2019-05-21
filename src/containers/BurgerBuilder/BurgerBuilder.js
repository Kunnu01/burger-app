import React, { Component } from 'react';

import { Burger, Modal } from '../../components';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
        }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        })
    }

    purchaseContinueHandler = () => {
        alert("Successful");
    }

    handlePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(item => ingredients[item])
            .reduce((sum, el) => sum + el, 0);
        this.setState({
            purchasable: sum > 0,
        })
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.handlePurchasable(updatedIngredients);
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount) {
            const updatedCounted = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCounted;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients,
            });
            this.handlePurchasable(updatedIngredients);
        }
        return;
    }

    render () {
        const { ingredients, purchasable, purchasing, totalPrice } = this.state;
        const disabledInfo = {
            ...ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <>
                <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={totalPrice}
                        ingredients={ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    purchasable={!purchasable}
                />
            </>
        );
    }
}

export default BurgerBuilder;