import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../redux/users-reducer";
import s from "./Users.module.css";
import avatar from "./../../../img/avatarUnknown.svg";

type PropsType = {
  user: UserType;
  toggleFollow: (user: UserType) => void;
  userIsFollowingIDS: number[];
};

export const User: FC<PropsType> = ({ toggleFollow, user, ...props }) => {
  console.log("user rendering");
  const buttonName = user.followed ? "Unfollow" : "Follow";
  const onClickButtonHandler = async (user: UserType) => {
    toggleFollow(user);
  };
  return (
    <div key={user.id} className={s.user}>
      <div className={s.avatarAndButton}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            className={s.usersAvatar}
            src={user.photos.large ? user.photos.large : avatar}
            alt={"userLogo"}
          />
        </NavLink>
        <button
          onClick={() => onClickButtonHandler(user)}
          disabled={props.userIsFollowingIDS.some((i) => i === user.id)}
        >
          {buttonName}
        </button>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>{user.name}</div>
        <div className={s.status}>{user.status}</div>
        <div className={s.location}>
          <div>{user.id},</div>
          <div>{"city"}</div>
        </div>
      </div>
    </div>
  );
};
