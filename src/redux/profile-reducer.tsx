import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TXT_AREA_VALUE = 'CHANGE-POST-TXT-AREA-VALUE'


type PostType = {
    id: string
    message: string
    likes: number
}
type ProfilePageType = {
     posts: Array<PostType>
     postTxtAreaValue: string
}

type ActionType = AddPostActionType | ChangePostTxtAreaActionType

type InitialStateType = typeof initialState
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
    ] ,
    postTxtAreaValue: ''
}as ProfilePageType


export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

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

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
type ChangePostTxtAreaActionType = ReturnType<typeof changePostTxtAreaValueAC>
export const changePostTxtAreaValueAC = (text: string) => {
    return {
        type: CHANGE_POST_TXT_AREA_VALUE,
        payload: {
            text
        }
    } as const
}