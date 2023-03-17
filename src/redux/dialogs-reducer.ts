import {v1} from "uuid";
import {ActionType, MessagesPageType} from "./Types";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_DIALOGS_TXT_AREA_VALUE = 'CHANGE-DIALOGS-TXT-AREA-VALUE';


export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}
export const changeDialogsTxtAreaValueAC = (text: string) => {
    return {
        type: CHANGE_DIALOGS_TXT_AREA_VALUE,
        payload: {
            text
        }
    } as const
}


const defaultState: MessagesPageType = {
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

export const dialogsReducer = (state: MessagesPageType = defaultState, action: ActionType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.dialogsTxtAreaValue}],
                dialogsTxtAreaValue: ''
            }
        case CHANGE_DIALOGS_TXT_AREA_VALUE:
            return {...state, dialogsTxtAreaValue: action.payload.text}
        default:
            return state
    }
}

export default dialogsReducer