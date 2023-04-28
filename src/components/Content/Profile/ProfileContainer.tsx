import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, ProfileType } from "../../../redux/profile-reducer";
import { StateType } from "../../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/WithAuthRedirect";

type MapStatePropsType = {
  profile: ProfileType;
  currentPage: number;
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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    currentPage: state.usersPage.currentPage,
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(withAuthRedirect(ProfileContainer))
);
