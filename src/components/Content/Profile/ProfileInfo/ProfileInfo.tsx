import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileType } from "../../../../redux/profile-reducer";
import { Preloader } from "../../../../Common/Preloader/Preloader";

type ProfileInfoPropsType = {
  profile: ProfileType;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <img
        className={s.my_logo}
        src={props.profile.photos.large}
        alt="my_logo"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit
        sapiente tempore totam velit, vitae. Aspernatur, blanditiis consequuntur
        cum doloremque dolores ea eum exercitationem fugit nisi saepe, sed
        voluptates? Debitis.
      </p>
    </div>
  );
};

export default ProfileInfo;
