import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

export default class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: ''
            },
            isLoading: false,
        }
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
        });
        const { ingredients, price } = this.props
        const order = {
            ingredients,
            price,
            customer: {
                name: 'John Doe',
                address: {
                    street: 'testStreet',
                    zipCode: '121001',
                    country: 'America',
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'prime',
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    isLoading: false,
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                })
            });
    }
    
    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name" />
                <input className={styles.Input} type="text" name="email" placeholder="Your email" />
                <input className={styles.Input} type="text" name="street" placeholder="Street" />
                <input className={styles.Input} type="text" name="postal" placeholder="Your Postal Code" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if (this.state.isLoading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter you Contact Details</h4>
                {form}
            </div>
        )
    }
}
