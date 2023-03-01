import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changePostTxtAreaValue, state, StateType, subscribe} from "./redux/state";

const rerender = (state:StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            changePostTxtAreaValue={changePostTxtAreaValue}
        />, document.getElementById('root')
    );
}
console.log('hi')
rerender(state)
subscribe(rerender)