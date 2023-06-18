import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { StateType } from "./redux-store";

const initState: InitStateType = {
  isInitialized: false,
};

export const appReducer = (
  state: InitStateType = initState,
  action: ActionType
): InitStateType => {
  switch (action.type) {
    case "TOGGLE-INITIALIZED":
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};
// action creators
export const toggleInitializedAC = (isInitialized: boolean) =>
  ({
    type: "TOGGLE-INITIALIZED",
    isInitialized,
  } as const);

// thunks
export const initializeApp =
  (): ThunkAction<void, StateType, unknown, AnyAction> => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(toggleInitializedAC(true));
  };

type InitStateType = {
  isInitialized: boolean;
};
type ActionType = ReturnType<typeof toggleInitializedAC>;
