import React, {FC} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../../redux/store";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: FC<ProfileType> = ({profilePage, ...props}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={profilePage}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;