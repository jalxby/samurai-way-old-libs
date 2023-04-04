import { connect } from "react-redux";

import { StateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import {
  followAC,
  selectPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../../redux/users-reducer";
import Users from "./Users";

type MapStatePropsType = {
  items: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
};
type MapDispatchPropsType = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (id: number) => void;
  setTotalCount: (totalCount: number) => void;
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (id: number) => {
      dispatch(followAC(id));
    },
    unfollow: (id: number) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (id: number) => {
      dispatch(selectPageAC(id));
    },
    setTotalCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
