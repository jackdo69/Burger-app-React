import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    price={order.price}
                    ingredients={order.ingredients}
                    key={order.id} />
            ));
        }
        return orders
    }
};

const mapStatehToProps = state => {
    return {
        token: state.auth.token,
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapStatehToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));