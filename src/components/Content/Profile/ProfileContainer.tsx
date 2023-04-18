import React from "react";
import { UsersPropsType } from "../Users/UsersContainer";
import Profile from "./Profile";
import axios from "axios";
import { UserType } from "../../../redux/users-reducer";
import { connect } from "react-redux";
import {
  getProfile,
  ProfileType,
  setUserProfile,
} from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { usersAPI } from "../../../api/api";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
};
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
  getProfile: (userId: string) => void;
};
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;
type UrlParamsType = { userId: string };
type PropsType = RouteComponentProps<UrlParamsType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId: string = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
  };
};
const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile, getProfile })(
  WithUrlDataContainerComponent
);
