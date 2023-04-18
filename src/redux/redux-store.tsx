import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type StateType = ReturnType<typeof rootReducer>;
export default store;
