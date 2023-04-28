import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

type MapStatePropsType = {
  isAuth: boolean;
};
const mapStateToProps = (state: any): MapStatePropsType => {
  return {
    isAuth: state.auth.isAused,
  };
};

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
  const RedirectComponent = (props: MapStatePropsType) => {
    const { isAuth, ...rest } = props;
    console.log(props.isAuth);
    if (!props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return <Component {...(rest as T)} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
}
