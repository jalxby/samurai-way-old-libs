import { connect } from "react-redux";
import { StateType } from "../../../redux/redux-store";
import React from "react";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../../../Common/Preloader/Preloader";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
  UserType,
} from "../../../redux/users-reducer";

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
  setTotalUsersCount: (totalCount: number) => void;
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
          this.props.setTotalUsersCount(totalCount);
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
          {...this.props}
          // currentPage={this.props.currentPage}
          // follow={this.props.follow}
          // items={this.props.items}
          onClickPage={this.onClickPage}
          // pageSize={this.props.pageSize}
          // totalCount={this.props.totalCount}
          // unfollow={this.props.unfollow}
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersClass);
