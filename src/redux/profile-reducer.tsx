import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./Types";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TXT_AREA_VALUE = 'CHANGE-POST-TXT-AREA-VALUE'


export const addPostAC = () => ({type: ADD_POST} as const)
export const changePostTxtAreaValueAC = (text: string) => {
    return {
        type: CHANGE_POST_TXT_AREA_VALUE,
        payload: {
            text
        }
    } as const
}


const initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            message: "Hi! How are you?",
            likes: 4
        },
        {
            id: v1(),
            message: "Lorem ipsum dolor.",
            likes: 7
        },
        {
            id: v1(),
            message: "Lorem ipsum dolor sit.",
            likes: 14
        },
    ],
    postTxtAreaValue: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: state.postTxtAreaValue, likes: 0}],
                postTxtAreaValue: ''
            }
        case CHANGE_POST_TXT_AREA_VALUE:
            return {...state, postTxtAreaValue: action.payload.text}
        default:
            return state
    }
}

export default profileReducer