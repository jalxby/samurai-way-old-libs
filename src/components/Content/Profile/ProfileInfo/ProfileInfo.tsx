import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfilePropsType} from "../ProfileContainer";

// type ProfileInfoPropsType = {
//     profile: ProfileType;
//     status: string
// };

const ProfileInfo = (props: ProfilePropsType) => {
    console.log('ProfileInfo')
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={s.profileInfo}>
            <img
                className={s.my_logo}
                src={props.profile.photos.large}
                alt="my_logo"
            />
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    );
};

export default ProfileInfo;
