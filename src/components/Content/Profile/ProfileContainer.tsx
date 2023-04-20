import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, ProfileType } from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { Dispatch } from "redux";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
  isAuth: boolean;
};
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
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
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAused,
  };
};
const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
