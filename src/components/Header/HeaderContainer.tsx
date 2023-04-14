import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";
import { toggleIsFetching } from "../../redux/users-reducer";

type MapStatePropsType = {
  isAused: boolean;
  login: string | null;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  setAuthUserData: (userID: number, login: string, email: string) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};
export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response", response.data.data);
        if (response.data.resultCode === 0) {
          setTimeout(() => {
            const { id, login, email } = response.data.data;
            this.props.setAuthUserData(id, login, email);
            this.props.toggleIsFetching(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(
  HeaderContainer
);
