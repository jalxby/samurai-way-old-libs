import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile, getUserStatus, ProfileType} from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
  isAuth:boolean
  status:string
};
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void;
  getUserStatus:(userId: string) => void;
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
    //this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  debugger
  return {
    isAuth: state.auth.isAused,
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
    status:state.profilePage.status
  };
};

export default connect(mapStateToProps, { getUserProfile,getUserStatus})(
  withRouter(withAuthRedirect(ProfileContainer))
);
