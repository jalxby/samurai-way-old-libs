import React, {FC} from 'react';
import Friends from "./Friends/Friends";
import Dialog from "./Dialog/Dialog";
import s from "./Messages.module.css"
import {MessagePageType} from "../../../redux/state";

type MessagesType = {
    messagesPage: MessagePageType
}
const Messages: FC<MessagesType> = ({messagesPage: {friends, messages}}) => {
    return (
        <div className={s.messages}>
            <Friends friends={friends}/>
            <div className={s.vl}></div>
            <Dialog messages={messages}/>
        </div>
    );
};

export default Messages;