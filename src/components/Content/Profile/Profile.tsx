import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfilePropsType } from "./ProfileContainer";

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}  status={props.status}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
