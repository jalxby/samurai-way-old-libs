import React, {FC} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

type ProfileType = {
    addPost: () => void
    profilePage: ProfilePageType
    changePostTxtAreaValue: (message: string) => void
}

const Profile: FC<ProfileType> = ({profilePage, addPost, ...props}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                addPost={addPost}
                profilePage={profilePage}
                changePostTxtAreaValue={props.changePostTxtAreaValue}
            />
        </div>
    );
};

export default Profile;