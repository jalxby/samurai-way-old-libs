import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {ActionType} from "../../../redux/Types";
import {followAC, setUsersAC, unfollowAC, UsersStateType, UserType} from "../../../redux/users-reducer";
import {StateType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersStateType) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }

}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
            console.log('I am follow now')
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
            console.log('I am unfollow now')
        },
        setUsers: (users: UsersStateType) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


