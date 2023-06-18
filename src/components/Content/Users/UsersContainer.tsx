import React from "react";
import { connect } from "react-redux";
import { StateType } from "../../../redux/redux-store";
import {
  getUsersThunkCreator,
  setTotalUsersCount,
  setUsers,
  toggleFollow,
  UserType,
} from "../../../redux/users-reducer";
import {
  getCurrentPage,
  getFake,
  getIsAuth,
  getIsFetching,
  getPageSize,
  getTotalCount,
  getUserIsFollowingIDS,
  getUsers,
} from "../../../redux/users-selectors";
import { Users } from "./Users";

type MapStatePropsType = {
  items: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  userIsFollowingIDS: number[];
  isAuth: boolean;
  fake: UserType[];
};

type MapDispatchPropsType = {
  setUsers: (users: UserType[]) => void;
  setTotalUsersCount: (totalCount: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  toggleFollow: (user: UserType) => void;
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersClass extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onClickPage = (el: number) => {
    this.props.getUsersThunkCreator(el, this.props.pageSize);
  };

  render() {
    console.log("USERS RENDERING");
    return (
      <div>
        <Users {...this.props} onClickPage={this.onClickPage} />
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  console.log("mapStateToProps USERS");
  return {
    items: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    userIsFollowingIDS: getUserIsFollowingIDS(state),
    isAuth: getIsAuth(state),
    fake: getFake(state),
  };
};
export default connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  getUsersThunkCreator,
  toggleFollow,
})(UsersClass);
