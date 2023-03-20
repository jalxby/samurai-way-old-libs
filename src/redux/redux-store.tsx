import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)
export type StateType = ReturnType<typeof rootReducer>
export default store