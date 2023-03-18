import React, {FC} from 'react';
import Friends from "./Friends/Friends";
import s from "./Messages.module.css"
import {Store} from "redux";
import DialogContainer from "./Dialog/DialogContainer";
import {StoreType} from "../../../redux/redux-store";
import {ActionType} from "../../../redux/Types";

type MessagesType = {
    store: Store<StoreType, ActionType>
}
const Messages: FC<MessagesType> = (props) => {
    return (
        <div className={s.messages}>
            <Friends friends={props.store.getState().messagesPage.friends}/>
            <div className={s.vl}></div>
            <DialogContainer store={props.store}/>
        </div>
    );
};

export default Messages;