import React from "react";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { StateType } from "./redux/redux-store";
import { Preloader } from "./Common/Preloader/Preloader";

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className={s.appWrapper}>
          <HeaderContainer />
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    isInitialized: state.app.isInitialized,
  };
};

type MapDispatchPropsType = {
  initializeApp: () => void;
};
type MapStatePropsType = {
  isInitialized: boolean;
};

export type AppPropsType = MapStatePropsType & MapDispatchPropsType;

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp })
)(App);
