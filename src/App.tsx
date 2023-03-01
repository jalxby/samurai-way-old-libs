import React, {FC} from 'react';
import s from './App.module.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/state";

type AppType = {
    state: StateType
    addPost: () => void
    changePostTxtAreaValue: (message: string) => void
}
const App: FC<AppType> = ({state, ...props}) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Sidebar/>
                <Content
                    state={state}
                    addPost={props.addPost}
                    changePostTxtAreaValue={props.changePostTxtAreaValue}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
