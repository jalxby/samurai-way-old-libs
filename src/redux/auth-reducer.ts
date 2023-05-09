import {
  IsFetchingACType,
  TOGGLE_IS_FETCHING,
  toggleIsFetching,
} from "./users-reducer";
import { authAPI } from "../api/api";
import { AnyAction, Dispatch } from "redux";
import { StateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";

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
  (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI
      .getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email, true));
          dispatch(toggleIsFetching(false));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const logIn =
  (
    email: string,
    password: string,
    rememberMe: boolean
  ): ThunkAction<void, StateType, unknown, AnyAction> =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let error = data.messages.length > 0 ? data.messages[0] : "Some Error";
        dispatch(stopSubmit("loginForm", { _error: error }));
      }
    });
  };

export const logout =
  (): ThunkAction<void, StateType, unknown, AnyAction> => (dispatch) => {
    authAPI.logOff().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
