import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
  isAuth:boolean
  status:string
};
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
  getUserStatus:(userId: string) => void;
  updateUserStatus:(userId: string) => void;

};
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;
type UrlParamsType = { userId: string };
type PropsType = RouteComponentProps<UrlParamsType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    console.log(`ProfileContainer`)
    let userId: string = this.props.match.params.userId;
    if (!userId) {
      userId = "12230";
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
    isAuth: state.auth.isAused,
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
    status:state.profilePage.status
  };
};
export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
