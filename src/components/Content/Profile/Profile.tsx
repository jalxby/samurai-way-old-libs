import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
  // store: Store<StoreType, ActionType>
};

const Profile: FC<ProfileType> = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
      // store={props.store}
      />
    </div>
  );
};

export default Profile;
