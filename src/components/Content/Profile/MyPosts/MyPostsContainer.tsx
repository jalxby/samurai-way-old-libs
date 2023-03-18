import React, {FC, useContext} from 'react';
import {addPostAC, changePostTxtAreaValueAC} from "../../../../redux/profile-reducer";
import {StoreContext} from "../../../../StoreContext";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    // store: Store<StoreType, ActionType>
}
const MyPostsContainer: FC<MyPostsContainerType> = (props) => {
    const store = useContext(StoreContext);
    const addPostHandler = () => {
        store.dispatch(addPostAC())
    }

    const txtAreaHandler = (text: string) => {
        store.dispatch(changePostTxtAreaValueAC(text))
    }
    const profilePage = store.getState().profilePage
    const postTxtAreaValue = store.getState().profilePage.postTxtAreaValue


    return (
        <MyPosts profilePage={profilePage}
                 postTxtAreaValue={postTxtAreaValue}
                 addPostCallback={addPostHandler}
                 txtAreaCallback={txtAreaHandler}
        />
    )

};

export default MyPostsContainer;