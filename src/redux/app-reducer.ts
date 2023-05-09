import { AnyAction } from "redux";
import { getAuthUserData } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
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
  (): ThunkAction<void, StateType, unknown, AnyAction> => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
      dispatch(toggleInitializedAC(true));
    });
  };

type InitStateType = {
  isInitialized: boolean;
};
type ActionType = ReturnType<typeof toggleInitializedAC>;
