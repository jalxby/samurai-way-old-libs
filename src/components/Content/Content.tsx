import React, { FC } from "react";
import head_logo from "../../img/head_content_img.png";
import s from "./Content.module.css";
import Messages from "./Messages/Messages";
import { Route } from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

type ContentType = {
  // store: Store<StoreType, ActionType>
};
const Content: FC<ContentType> = (props) => {
  return (
    <div className={s.content}>
      <img src={head_logo} alt={"head_content_img"} />
      <div>
        <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
        <Route path={"/messages"} render={() => <Messages />} />
        <Route path={"/users"} render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default Content;
