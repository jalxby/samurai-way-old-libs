import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  logout: () => void;
};
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
  };
};
export default connect(mapStateToProps, { logout })(HeaderContainer);
