const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SELECT_PAGE = "SELECT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

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
};

type InitialStateType = typeof initialUsersState;

type ActionType =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SelectPageACType
  | SetTotalUsersCountACType
  | IsFetchingACType;

const initialUsersState = {
  items: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  error: null,
} as UsersPageType;

export const usersReducer = (
  state: InitialStateType = initialUsersState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        items: state.items.map((u) =>
          u.id === action.payload.id ? { ...u, followed: true } : u
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

type IsFetchingACType = ReturnType<typeof toggleIsFetching>;
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: {
      isFetching,
    },
  } as const;
};
