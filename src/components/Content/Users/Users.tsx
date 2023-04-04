import React from "react";
import { UserType } from "../../../redux/users-reducer";
import s from "./Users.module.css";
import { UsersPropsType } from "./UsersContainer";
import axios from "axios";
import { v1 } from "uuid";
import clsx from "clsx";

class UsersC extends React.Component<UsersPropsType> {
  componentDidMount() {
    if (this.props.items.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          const items: UserType[] = response.data.items;
          this.props.setUsers(items);
          const totalCount: number = response.data.totalCount;
          this.props.setTotalCount(totalCount);
        });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<UsersPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {}

  onClickPage = (el: number) => {
    this.props.setCurrentPage(el);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`
      )
      .then((response) => {
        const data: UserType[] = response.data.items;
        this.props.setUsers(data);
      });
  };

  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <>
        <div className={s.buttons}>
          <span>
            {pages.map((el) => {
              const className = clsx(
                s.page,
                el === this.props.currentPage && s.selectedPage
              );
              return (
                <button
                  key={v1()}
                  className={className}
                  onClick={() => this.onClickPage(el)}
                >
                  {el}
                </button>
              );
            })}
          </span>
        </div>
        <div className={s.users}>
          {this.props.items.map((u) => {
            const onClickButtonHandler = (user: UserType) => {
              return user.followed
                ? () => this.props.unfollow(user.id)
                : () => this.props.follow(user.id);
            };
            const buttonName = u.followed ? "Unfollow" : "Follow";
            return (
              <div key={u.id} className={s.user}>
                <div className={s.avatarAndButton}>
                  <img
                    className={s.usersAvatar}
                    src={u.photos.large}
                    alt={"userLogo"}
                  />
                  <button onClick={onClickButtonHandler(u)}>
                    {buttonName}
                  </button>
                </div>
                <div className={s.userInfo}>
                  <div className={s.userName}>{u.name}</div>
                  <div className={s.status}>{u.status}</div>
                  <div className={s.location}>
                    <div>{"country"},</div>
                    <div>{"city"}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UsersC;
