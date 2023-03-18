import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer

})

let store = createStore(reducers)
export type StoreType = ReturnType<typeof reducers>
export default store