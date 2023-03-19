import React from 'react';
import {addPostAC, changePostTxtAreaValueAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionType} from "../../../../redux/Types";
import {Dispatch} from "redux";
import {StoreType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StoreType) => {
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