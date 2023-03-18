import React, {FC} from 'react';
import {addPostAC, changePostTxtAreaValueAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {StoreType} from "../../../../redux/redux-store";
import {ActionType} from "../../../../redux/Types";

type MyPostsContainerType = {
    store: Store<StoreType, ActionType>
}
const MyPostsContainer: FC<MyPostsContainerType> = ({store: {dispatch, getState}, ...props}) => {
    const profilePage = getState().profilePage
    const postTxtAreaValue = getState().profilePage.postTxtAreaValue

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const txtAreaHandler = (text: string) => {
        dispatch(changePostTxtAreaValueAC(text))
    }
    return (
        <MyPosts profilePage={profilePage}
                 postTxtAreaValue={postTxtAreaValue}
                 addPostCallback={addPostHandler}
                 txtAreaCallback={txtAreaHandler}
        />);
};

export default MyPostsContainer;