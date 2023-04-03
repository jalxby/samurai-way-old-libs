const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SELECT_PAGE = "SELECT-PAGE";

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
  error: string | null;
};

type InitialStateType = typeof initialUsersState;
type ActionType =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SelectPageACType;
const initialUsersState = {
  items: [],
  pageSize: 10,
  totalCount: 100,
  currentPage: 1,
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
      return { ...state, items: [...state.items, ...action.payload.users] };
    case SELECT_PAGE:
      return { ...state, currentPage: action.payload.id };
    default:
      return state;
  }
};

type FollowACType = ReturnType<typeof followAC>;
export const followAC = (id: number) => {
  return {
    type: FOLLOW,
    payload: {
      id,
    },
  } as const;
};
type UnfollowACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = (id: number) => {
  return {
    type: UNFOLLOW,
    payload: {
      id,
    },
  } as const;
};

type SetUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UserType[]) => {
  return {
    type: SET_USERS,
    payload: {
      users,
    },
  } as const;
};

type SelectPageACType = ReturnType<typeof selectPageAC>;
export const selectPageAC = (id: number) => {
  return {
    type: SELECT_PAGE,
    payload: {
      id,
    },
  } as const;
};
