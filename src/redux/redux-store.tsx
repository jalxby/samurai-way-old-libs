import { combineReducers, createStore } from "redux";
import { usersReducer } from "./users-reducer";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { authReducer } from "./auth-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(rootReducer);
export type StateType = ReturnType<typeof rootReducer>;
export default store;
