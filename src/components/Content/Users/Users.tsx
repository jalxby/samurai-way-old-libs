import Pagination from "@mui/material/Pagination";
import React from "react";
import { User } from "./User";
import s from "./Users.module.css";
import { UsersPropsType } from "./UsersContainer";

type PropsType = {
  onClickPage: (el: number) => void;
} & UsersPropsType;

export const Users = (props: PropsType) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    props.onClickPage(page);
  };

  const users = props.items.map((u) => {
    return (
      <User
        key={u.id}
        user={u}
        toggleFollow={props.toggleFollow}
        userIsFollowingIDS={props.userIsFollowingIDS}
      />
    );
  });

  return (
    <>
      <div className={s.buttons}>
        <Pagination
          count={pagesCount}
          shape="rounded"
          onChange={handlePageChange}
          variant="outlined"
          page={props.currentPage}
        />
      </div>
      <div className={s.users}>{users}</div>
    </>
  );
};
