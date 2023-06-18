import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { ProfilePropsType } from "../ProfileContainer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import avatar from "./../../../../img/avatarUnknown.svg";

const ProfileInfo = (props: ProfilePropsType) => {
  console.log("ProfileInfo");
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <img
        className={s.my_logo}
        src={props.profile.photos.large ? props.profile.photos.large : avatar}
        alt="my_logo"
        style={{ width: "64px" }}
      />
      <ProfileStatusWithHooks
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
    </div>
  );
};

export default ProfileInfo;
