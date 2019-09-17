import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to use React with Redux, we need react-redux.
import { Provider } from 'react-redux'; //this is our glue between react and redux

// 2. create a redux store, so that:
// 2.1. Redux exists
// 2.2. The Proivider has that store
import { createStore } from 'redux';

// 3. reducers to populate the store
// 3.1. reducers go into the rootReducer
// 3.2. Make indidivual reducers to go into the rootreducer
import rootReducer from './reducers/rootReducer';

// 4. acutally create the store (2) by passing it the 
// rootReducer (3) which is made up of the indidvual reducers
const aPublix = createStore(rootReducer);
// WOOHOO! WE MADE A STORE. REDUX IS READY!

// Provider (1) is the component that glues React and Redux together
// We hand the Prodiver to ReactDOM.render, 
//and we hand the Provider a prop of store, with our Store
ReactDOM.render(
    <Provider store={aPublix}>
        <App />
    </Provider>,
    document.getElementById('root')
);
