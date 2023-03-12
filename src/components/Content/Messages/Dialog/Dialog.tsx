import React, {FC, RefObject} from 'react';
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {ActionType, MessagesPageType} from "../../../../redux/store";
import {addMessageActionCreator, changeDialogsTxtAreaValueActionCreator} from "../../../../redux/dialogs-reducer";

type DialogsType = {
    messages: MessagesPageType
    dispatch: (action: ActionType) => void
}
const Dialog: FC<DialogsType> = ({messages, ...props}) => {
    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessageHandler = () => {
        props.dispatch(addMessageActionCreator())
    }

    const changeTxtAreaValue = () => {
        if (newMessageElement.current) {
            props.dispatch(changeDialogsTxtAreaValueActionCreator(newMessageElement.current.value))
        }
    }

    const dialogItems = messages.messages.map(m => <DialogItem message={m.message}/>)

    return (
        <div className={s.dialog}>
            {dialogItems}
            <div>
                <textarea ref={newMessageElement} cols={50} rows={5} value={messages.dialogsTxtAreaValue}
                          onChange={changeTxtAreaValue}></textarea>
            </div>
            <button onClick={addMessageHandler} type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
    );
};

export default Dialog;