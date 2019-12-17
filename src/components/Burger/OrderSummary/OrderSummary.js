import React from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}> {igKey} </span>
         : {props.ingredients[igKey]} </li> );
    });
    return (
        <Aux>
            <h3>You order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button
                clicked={props.purchasedCancelled}
                btnType="Danger">CANCEL</Button>
            <Button
                clicked={props.purchasedContinued}
                btnType="Success">CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;