import React from 'react';
import {addPostAC, changePostTxtAreaValueAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../../redux/Types";
import {Dispatch} from "redux";

const mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage,
        postTxtAreaValue: state.profilePage.postTxtAreaValue
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        addPostCallback: () => {
            dispatch(addPostAC())
        },
        txtAreaCallback: (text: string) => {
            dispatch(changePostTxtAreaValueAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;