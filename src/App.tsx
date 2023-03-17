import React, {FC} from 'react';
import s from './App.module.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import {ActionType, StateType} from "./redux/Types";

type AppType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
const App: FC<AppType> = ({state, ...props}) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Sidebar/>
                <Content
                    state={state}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
