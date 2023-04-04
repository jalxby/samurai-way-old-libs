import { connect } from "react-redux";
import { StateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";
import loader from "../../../img/loader.svg";
import {
  followAC,
  isFetchingAC,
  selectPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../../redux/users-reducer";
import React from "react";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../../../Common/Preloader/Preloader";

type MapStatePropsType = {
  items: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (id: number) => void;
  setTotalCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersClass extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.items.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetching(false);
          const items: UserType[] = response.data.items;
          this.props.setUsers(items);
          const totalCount: number = response.data.totalCount;
          this.props.setTotalCount(totalCount);
        });
    }
  }

  onClickPage = (el: number) => {
    this.props.setCurrentPage(el);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        const data: UserType[] = response.data.items;
        this.props.setUsers(data);
      });
  };

  render() {
    return (
      <div>
        {this.props.isFetching && <Preloader />}
        <Users
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          items={this.props.items}
          onClickPage={this.onClickPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          unfollow={this.props.unfollow}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    items: state.usersPage.items,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(isFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
