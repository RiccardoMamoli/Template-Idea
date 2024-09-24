import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../actions";

const initialState = {
    items: []
}

const reduxCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        }

        case INCREMENT_QUANTITY: {
            return {
                ...state,
                items: state.items.map(item =>
                    item.name === action.payload.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
        }

        case DECREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.name === action.payload.name
                        ? { ...item, quantity: Math.max(item.quantity - 1, 1) } 
                        : item
                )
            };



        case REMOVE_FROM_CART: {
            return {
                ...state,
                items: state.items.filter(item => item.name !== action.payload.name)
            }
        }
        default:
            return state;
    }
};
export default reduxCart;