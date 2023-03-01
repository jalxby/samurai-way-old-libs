import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changePostTxtAreaValue, StateType} from "./redux/state";

export const rerender = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            changePostTxtAreaValue={changePostTxtAreaValue}
        />, document.getElementById('root')
    );
}

