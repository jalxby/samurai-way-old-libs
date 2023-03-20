import {ActionType} from "./Types";
import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersStateType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    avatarUrl: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
    followed: boolean
}

export type InitialStateType = typeof initialState

const initialState = {
    users: [

    ] as Array<UserType>
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload.users.users]}
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersStateType) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
