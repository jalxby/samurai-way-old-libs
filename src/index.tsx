import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./redux/redux-store";
import {Store} from "redux";
import {ActionType} from "./redux/Types";
import {StoreContext} from "./StoreContext";

const rerender = (store: Store<StoreType, ActionType>) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>, document.getElementById('root')
    );
}

rerender(store)
store.subscribe(() => rerender(store))