import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object.helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SELECT_PAGE = "SELECT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

export type UserType = {
  name: string;
  id: number;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
};

export type UsersPageType = {
  items: UserType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  error: string | null;
  userIsFollowingIDS: Array<number>;
  fake: number;
};

type InitialStateType = typeof initialUsersState;
type FakeType = {
  type: "FAKE";
};
type ActionType =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SelectPageACType
  | SetTotalUsersCountACType
  | IsFetchingACType
  | IsFollowingInProgressACType
  | FakeType;

const initialUsersState = {
  items: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  error: null,
  userIsFollowingIDS: [],
  fake: 1,
} as UsersPageType;

export const usersReducer = (
  state: InitialStateType = initialUsersState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "FAKE":
      return { ...state, fake: state.fake + 1 };
    case FOLLOW:
      return {
        ...state,
        items: updateObjectInArray<UserType>(
          state.items,
          action.payload.id,
          "id",
          { followed: true }
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        items: state.items.map((u) =>
          u.id === action.payload.id ? { ...u, followed: false } : u
        ),
      };
    case SET_USERS:
      return { ...state, items: [...action.payload.users] };
    case SELECT_PAGE:
      return { ...state, currentPage: action.payload.id };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalCount: action.payload.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        userIsFollowingIDS: action.payload.isFetching
          ? [...state.userIsFollowingIDS, action.payload.userID]
          : state.userIsFollowingIDS.filter((i) => i !== action.payload.userID),
      };
    default:
      return state;
  }
};

type FollowACType = ReturnType<typeof follow>;
export const follow = (id: number) => {
  return {
    type: FOLLOW,
    payload: {
      id,
    },
  } as const;
};
type UnfollowACType = ReturnType<typeof unfollow>;
export const unfollow = (id: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id,
    },
  } as const;
};

type SetUsersACType = ReturnType<typeof setUsers>;
export const setUsers = (users: UserType[]) => {
  return {
    type: SET_USERS,
    payload: {
      users,
    },
  } as const;
};

type SelectPageACType = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (id: number) => {
  return {
    type: SELECT_PAGE,
    payload: {
      id,
    },
  } as const;
};

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    payload: {
      totalCount,
    },
  } as const;
};

export type IsFetchingACType = ReturnType<typeof toggleIsFetching>;
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const;
};

export type IsFollowingInProgressACType = ReturnType<
  typeof isFollowingProgress
>;
export const isFollowingProgress = (isFetching: boolean, userID: number) => {
  return {
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    payload: {
      isFetching,
      userID,
    },
  } as const;
};

export const getUsersThunkCreator =
  (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const res = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(res.items));
    dispatch(setTotalUsersCount(res.totalCount));
    dispatch(toggleIsFetching(false));
  };

export const toggleFollow = (user: UserType) => async (dispatch: Dispatch) => {
  try {
    dispatch(isFollowingProgress(true, user.id));
    const isFollowed = await usersAPI.getFollow(user.id);
    if (isFollowed) {
      const isFollowed = await usersAPI.deleteFollow(user.id);
      isFollowed.resultCode === 0 && dispatch(unfollow(user.id));
    } else {
      const isFollowed = await usersAPI.postFollow(user.id);
      isFollowed.resultCode === 0 && dispatch(follow(user.id));
    }
    dispatch(isFollowingProgress(false, user.id));
  } catch (err) {
    console.log("error test", err);
  }
};
