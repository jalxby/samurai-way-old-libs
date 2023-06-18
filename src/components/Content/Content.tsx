import React from "react";
import { Route } from "react-router-dom";
import head_logo from "../../img/head_content_img.png";
import LoginContainer from "../Login/LoginContainer";
import s from "./Content.module.css";
import Messages from "./Messages/Messages";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
  return (
    <div className={s.content}>
      <img src={head_logo} alt={"head_content_img"} />
      <div>
        <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
        <Route path={"/messages"} render={() => <Messages />} />
        <Route path={"/users"} render={() => <UsersContainer />} />
        <Route path={"/login"} render={() => <LoginContainer />}></Route>
      </div>
    </div>
  );
};

export default Content;
