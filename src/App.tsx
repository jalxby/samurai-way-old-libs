import React from 'react';
import s from './App.module.css';
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
