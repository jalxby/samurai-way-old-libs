import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TXT_AREA_VALUE = 'CHANGE-POST-TXT-AREA-VALUE'

export const addPostActionCreator = (): ActionType => ({type: ADD_POST})
export const changePostTxtAreaValueActionCreator = (text: string): ActionType => ({
    type: CHANGE_POST_TXT_AREA_VALUE,
    payload: text
})

const initialState = {
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

const profileReducer = (state: ProfilePageType = initialState, action: ActionType
) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push(
                {id: v1(), message: state.postTxtAreaValue, likes: 0})
            state.postTxtAreaValue = ''
            return state
        case CHANGE_POST_TXT_AREA_VALUE:
            state.postTxtAreaValue = action.payload
            return state
        default:
            return state
    }
}

export default profileReducer