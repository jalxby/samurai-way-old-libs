import React from "react";
import s from "./Users.module.css";
import { v1 } from "uuid";
import { UserType } from "../../../redux/users-reducer";
import { NavLink, Redirect } from "react-router-dom";
import { UsersPropsType } from "./UsersContainer";
import clsx from "clsx";

type PropsType = {
  onClickPage: (el: number) => void;
} & UsersPropsType;

export const Users = (props: PropsType) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onClickButtonHandler = async (user: UserType) => {
    props.toggleFollow(user);
  };

  const buttons = pages.map((el) => {
    const className = clsx(s.page, el === props.currentPage && s.selectedPage);
    return (
      <button
        key={v1()}
        className={className}
        onClick={() => props.onClickPage(el)}
      >
        {el}
      </button>
    );
  });

  const users = props.items.map((u) => {
    const buttonName = u.followed ? "Unfollow" : "Follow";

    return (
      <div key={u.id} className={s.user}>
        <div className={s.avatarAndButton}>
          <NavLink to={`/profile/${u.id}`}>
            <img
              className={s.usersAvatar}
              src={u.photos.large}
              alt={"userLogo"}
            />
          </NavLink>
          <button
            onClick={() => onClickButtonHandler(u)}
            disabled={props.userIsFollowingIDS.some((i) => i === u.id)}
          >
            {buttonName}
          </button>
        </div>
        <div className={s.userInfo}>
          <div className={s.userName}>{u.name}</div>
          <div className={s.status}>{u.status}</div>
          <div className={s.location}>
            <div>{u.id},</div>
            <div>{"city"}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={s.buttons}>
        <span>{buttons}</span>
      </div>
      <div className={s.users}>{users}</div>
    </>
  );
};
