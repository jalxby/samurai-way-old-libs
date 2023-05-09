import React from "react";
import Login from "./Login";
import { StateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth-reducer";

type MapStatePropsType = {
  isAuth: boolean;
};

type MapDispatchToProps = {
  logIn: (email: string, password: string, rememberMe: boolean) => void;
};

export type LoginPropsType = MapStatePropsType & MapDispatchToProps;

const LoginContainer = (props: LoginPropsType) => {
  return <Login {...props} />;
};

const mapStatePropsType = (state: StateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStatePropsType, { logIn })(LoginContainer);
