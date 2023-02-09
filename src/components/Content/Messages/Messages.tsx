import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import Dialog from "./Dialog/Dialog";
import s from "./Messages.module.css"

const Messages = () => {
    return (
        <div className={s.messages}>
            <Dialogs/>
            <div className={s.vl}></div>
            <Dialog/>
        </div>
    );
};

export default Messages;