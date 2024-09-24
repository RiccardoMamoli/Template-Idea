export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'

export const addToCartAction = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCartAction = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const incrementQuantityAction = (item) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: item
    };
};

export const decrementQuantityAction = (item) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: item
    }
}