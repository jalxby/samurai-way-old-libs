import { StateType } from "./redux-store";
import { createSelector } from "reselect";
import { UserType } from "./users-reducer";

export const getFake1 = (state: StateType) => {
  return state.usersPage.items;
};
export const getFake = createSelector(getFake1, (users: UserType[]) => {
  return users.filter((u) => u.id === 1);
});

export const getUsers = (state: StateType) => {
  return state.usersPage.items;
};

export const getPageSize = (state: StateType) => {
  return state.usersPage.pageSize;
};
export const getTotalCount = (state: StateType) => {
  return state.usersPage.totalCount;
};
export const getCurrentPage = (state: StateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: StateType) => {
  return state.usersPage.isFetching;
};
export const getUserIsFollowingIDS = (state: StateType) => {
  return state.usersPage.userIsFollowingIDS;
};
export const getIsAuth = (state: StateType) => {
  return state.auth.isAuth;
};
