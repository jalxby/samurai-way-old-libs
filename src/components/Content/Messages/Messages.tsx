import React, { FC } from "react";
import s from "./Messages.module.css";
import { FriendsContainer } from "./Friends/FriendsContainer";
import { DialogContainer } from "./Dialog/DialogContainer";

type MessagesType = {
  // store: Store<StoreType, ActionType>
};
const Messages: FC<MessagesType> = (props) => {
  return (
    <div className={s.messages}>
      <FriendsContainer />
      <div className={s.vl}></div>
      <DialogContainer />
    </div>
  );
};

export default Messages;
