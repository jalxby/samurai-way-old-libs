import {v1} from "uuid";
import {ActionType, MessagesPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_DIALOGS_TXT_AREA_VALUE = 'CHANGE-DIALOGS-TXT-AREA-VALUE';

export const addMessageActionCreator = (): ActionType => ({type: ADD_MESSAGE})
export const changeDialogsTxtAreaValueActionCreator = (text: string): ActionType => ({
    type: CHANGE_DIALOGS_TXT_AREA_VALUE,
    payload: text
})

const defaultState = {
    friends: [
        {
            id: v1(),
            name: "Dimych"
        },
        {
            id: v1(),
            name: "Alex"
        },
        {
            id: v1(),
            name: "Victor"
        },
        {
            id: v1(),
            name: "Victor"
        },
        {
            id: v1(),
            name: "Sveta"
        },

    ],
    messages: [
        {
            id: v1(),
            message: "Hi!"
        },
        {
            id: v1(),
            message: "It-kamasutra"
        },
        {
            id: v1(),
            message: "How are you?"
        },
    ],
    dialogsTxtAreaValue: ''
}

export const dialogsReducer = (state: MessagesPageType = defaultState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: v1(), message: state.dialogsTxtAreaValue}
            state.messages = [...state.messages, newMessage]
            state.dialogsTxtAreaValue = ''
            return state
        case CHANGE_DIALOGS_TXT_AREA_VALUE:
            state.dialogsTxtAreaValue = action.payload
            return state
        default:
            return state
    }
}

export default dialogsReducer