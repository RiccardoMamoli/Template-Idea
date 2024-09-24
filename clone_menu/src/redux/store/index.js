import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reduxCart from '../reducers/reducersCart';

const MainReducer = combineReducers({
    cart: reduxCart
})

const store = configureStore({
    reducer: MainReducer
})

export default store;