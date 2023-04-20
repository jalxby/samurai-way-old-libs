import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";

type MapStatePropsType = {
  isAused: boolean;
  login: string | null;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  getAuthUserData: () => void;
};
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    isAused: state.auth.isAused,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
  };
};
export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
