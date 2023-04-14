import React, { FC } from "react";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppType = {
  // store: Store<StoreType, ActionType>
};

const App: FC<AppType> = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <HeaderContainer />
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
