import { IsFetchingACType, TOGGLE_IS_FETCHING } from "./users-reducer";

const SET_USER_DATA = "SET-USER-DATA";

let initState: AuthStateType = {
  userID: null,
  login: null,
  email: null,
  isFetching: false,
  isAused: false,
};

export type AuthStateType = {
  userID: number | null;
  login: string | null;
  email: string | null;
  isFetching: boolean;
  isAused: boolean;
};

type ActionType = SetUserACType | IsFetchingACType;

export const authReducer = (
  state = initState,
  action: ActionType
): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload, isAused: true };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload.isFetching };
    default:
      return state;
  }
};

type SetUserACType = ReturnType<typeof setAuthUserData>;
export const setAuthUserData = (
  userID: number,
  login: string,
  email: string
) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userID,
      login,
      email,
    },
  } as const;
};
