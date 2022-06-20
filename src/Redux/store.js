import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import productsReducer from "./api";

import AuthReducer from "./auth";

const rootReducer = combineReducers({
    user: AuthReducer,
    products: productsReducer
    //Aca hay que agregar los otros reducers que se requieran
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore () {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)) );
    return store;
}