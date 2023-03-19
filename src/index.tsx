import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StoreType} from "./redux/redux-store";
import {Store} from "redux";
import {ActionType} from "./redux/Types";
import {Provider} from "react-redux";

const rerender = (store: Store<StoreType, ActionType>) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root')
    );
}

rerender(store)
store.subscribe(() => rerender(store))