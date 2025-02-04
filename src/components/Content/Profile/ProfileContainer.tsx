import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  ProfileType,
  updateUserStatus,
} from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";
import { compose } from "redux";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
  isAuth: boolean;
  status: string;
  isAuthUserID: number | null;
};
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
  getUserStatus: (userId: string) => void;
  updateUserStatus: (userId: string) => void;
};
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;
type UrlParamsType = { userId: string };
type PropsType = RouteComponentProps<UrlParamsType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    console.log(this.props.status);
    let userId: string = this.props.match.params.userId;
    const id = this.props.isAuthUserID
      ? this.props.isAuthUserID.toString()
      : "";
    if (!userId) {
      userId = id;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuthUserID: state.auth.userID,
  };
};
export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
