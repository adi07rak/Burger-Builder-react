import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const tempIngredients = {};
        let price= 0;
        for (let param of query.entries()) {
            console.log('checking props ::::', param);
            if(param[0]=== 'price'){
                price= param[1];
            } else{
                tempIngredients[param[0]] = +param[1];
            }
            
        }
        this.setState({ ingredients: tempIngredients, totalPrice: price });
        console.log('checking props ::::', tempIngredients);


    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    chekcoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.chekcoutContinueHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render = {(props)=>( <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;