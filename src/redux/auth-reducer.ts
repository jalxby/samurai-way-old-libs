import { AnyAction, Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { StateType } from "./redux-store";
import {
  IsFetchingACType,
  TOGGLE_IS_FETCHING,
  toggleIsFetching,
} from "./users-reducer";

const SET_USER_DATA = "SET-USER-DATA";

let initState: AuthStateType = {
  userID: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

export type AuthStateType = {
  userID: number | null;
  login: string | null;
  email: string | null;
  isFetching: boolean;
  isAuth: boolean;
};

type ActionType = SetUserACType | IsFetchingACType;

export const authReducer = (
  state = initState,
  action: ActionType
): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload.isFetching };
    default:
      return state;
  }
};

type SetUserACType = ReturnType<typeof setAuthUserData>;
export const setAuthUserData = (
  userID: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
) => {
  return {
    type: SET_USER_DATA,
    payload: {
      userID,
      login,
      email,
      isAuth,
    },
  } as const;
};

export const getAuthUserData =
  (): ThunkAction<Promise<any>, StateType, unknown, AnyAction> =>
  async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await authAPI.getAuth();
    if (res.resultCode === 0) {
      const { id, login, email } = res.data;
      dispatch(setAuthUserData(id, login, email, true));
      dispatch(toggleIsFetching(false));
    }
  };

export const logIn =
  (
    email: string,
    password: string,
    rememberMe: boolean
  ): ThunkAction<void, StateType, unknown, AnyAction> =>
  async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe);
    if (res.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let error = res.messages.length > 0 ? res.messages[0] : "Some Error";
      dispatch(stopSubmit("loginForm", { _error: error }));
    }
  };

export const logout =
  (): ThunkAction<void, StateType, unknown, AnyAction> => async (dispatch) => {
    const res = await authAPI.logOff();
    if (res.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
