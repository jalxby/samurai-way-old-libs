import React from "react";
import s from "./Users.module.css";
import clsx from "clsx";
import { v1 } from "uuid";
import { UserType } from "../../../redux/users-reducer";

type UsersFunctionalPropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onClickPage: (el: number) => void;
  items: UserType[];
  unfollow: (id: number) => void;
  follow: (id: number) => void;
};

export const Users = (props: UsersFunctionalPropsType) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onClickButtonHandler = (user: UserType) => {
    return user.followed
      ? () => props.unfollow(user.id)
      : () => props.follow(user.id);
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
          <img
            className={s.usersAvatar}
            src={u.photos.large}
            alt={"userLogo"}
          />
          <button onClick={onClickButtonHandler(u)}>{buttonName}</button>
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
