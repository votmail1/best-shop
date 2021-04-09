import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {productListReducer} from "./reducers/productReducers";

const initialState = {}
const reducer = combineReducers({
    productList: productListReducer
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store