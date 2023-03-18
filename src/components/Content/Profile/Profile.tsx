import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";
import {StoreType} from "../../../redux/redux-store";
import {ActionType} from "../../../redux/Types";

type ProfileType = {
    store: Store<StoreType, ActionType>
}

const Profile: FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Profile;