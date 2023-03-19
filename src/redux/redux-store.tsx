import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer

})

let store = createStore(rootReducer)
export type StoreType = ReturnType<typeof rootReducer>
export default store