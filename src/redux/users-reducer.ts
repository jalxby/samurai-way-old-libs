const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type UsersPageType = {
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

type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType

type InitialUsersPageStateType = typeof initialState
const initialState = {
    users: []
}as UsersPageType


export const usersReducer = (state: InitialUsersPageStateType = initialState, action: ActionType): InitialUsersPageStateType => {
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

type FollowActionType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
type UnfollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersPageType) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
