import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import styles from './Orders.module.css';
import withErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            isLoading: true,
        }
    }
    
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    isLoading: false,
                    orders: fetchedOrders,
                })
            }) 
            .catch(err => {
                this.setState({isLoading: false});
            });
    }
    
    render() {
        return (
            <div className={styles.Orders}>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);