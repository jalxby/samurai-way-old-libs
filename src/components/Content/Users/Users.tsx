import React from "react";
import s from "./Users.module.css";
import { UserType } from "../../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import { UsersPropsType } from "./UsersContainer";
import Pagination from "@mui/material/Pagination";

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

  // const buttons = pages.map((el) => {
  //   return (
  //     <button key={v1()} onClick={() => props.onClickPage(el)}>
  //       {el}
  //     </button>
  //   );
  // });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    props.onClickPage(page);
  };

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

// import Stack from '@mui/material/Stack';
//
// export default function PaginationRounded() {
//   return (
//       <Stack spacing={2}>
//         <Pagination count={10} shape="rounded" />
//         <Pagination count={10} variant="outlined" shape="rounded" />
//       </Stack>
//   );
// }
