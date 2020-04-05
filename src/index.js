import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";

import {Provider} from 'react-redux';

import userReducer from './reducers/user-reducer';
import productReducer from './reducers/productReducer';
import {createStore, combineReducers} from 'redux';





const allReducer = combineReducers({ 
    products: productReducer,
    user: userReducer
})



const store = createStore(allReducer, 
    {
    products:[{name: 'iphone'}],
    user: 'vichi'
    },
    composeWithDevTools()
);
console.log(store.getState())




// store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
