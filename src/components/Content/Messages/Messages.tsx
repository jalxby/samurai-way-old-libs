import React, {FC} from 'react';
import Friends from "./Friends/Friends";
import s from "./Messages.module.css"
import DialogContainer from "./Dialog/DialogContainer";

type MessagesType = {
    // store: Store<StoreType, ActionType>
}
const Messages: FC<MessagesType> = (props) => {
    return (
        <div className={s.messages}>
            <Friends/>
            <div className={s.vl}></div>
            <DialogContainer/>
        </div>
    );
};

export default Messages;