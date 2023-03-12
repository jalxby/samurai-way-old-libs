import React, {FC} from 'react';
import Friends from "./Friends/Friends";
import Dialog from "./Dialog/Dialog";
import s from "./Messages.module.css"
import {ActionType, MessagesPageType} from "../../../redux/store";

type MessagesType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionType) => void
}
const Messages: FC<MessagesType> = ({messagesPage: messages, ...props}) => {
    return (
        <div className={s.messages}>
            <Friends friends={messages.friends}/>
            <div className={s.vl}></div>
            <Dialog messages={messages} dispatch={props.dispatch}/>
        </div>
    );
};

export default Messages;