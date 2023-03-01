import React, {RefObject} from 'react';
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageType} from "../../../../redux/state";

type DialogsType = {
    messages: Array<MessageType>
}
const Dialog = ({messages}: DialogsType) => {
    const newMessageLink: RefObject<HTMLTextAreaElement> = React.createRef()
    const addMessageHandler = () => {
        alert(newMessageLink.current?.value)
    }
    const dialogItems = messages.map(m => <DialogItem message={m.message}/>)

    return (
        <div className={s.dialog}>
            {dialogItems}
            <div>
                <textarea ref={newMessageLink} cols={50} rows={5}></textarea>
            </div>
            <button onClick={addMessageHandler} type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
    );
};

export default Dialog;