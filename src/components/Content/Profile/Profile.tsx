import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfilePropsType } from "./ProfileContainer";

const Profile = (props: ProfilePropsType) => {
    console.log(`Profile`)
  return (
    <div>
      <ProfileInfo {...props}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
