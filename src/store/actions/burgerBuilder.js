import * as actionTypes from '../actions/actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};


//Use of redux thunk from this part

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burger-app-29607.firebaseio.com/ingredients.json')
            .then(res => {
                console.log('hello');
                
                dispatch(setIngredients(res.data))
            }).catch(err => {
                dispatch(fetchIngredientsFailed())
            })
    }
}