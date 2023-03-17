import React, {FC, RefObject} from 'react';
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {ActionType, MessagesPageType} from "../../../../redux/Types";
import {addMessageAC, changeDialogsTxtAreaValueAC} from "../../../../redux/dialogs-reducer";
import {v1} from "uuid";

type DialogsType = {
    messages: MessagesPageType
    dispatch: (action: ActionType) => void
}
const Dialog: FC<DialogsType> = ({messages, ...props}) => {
    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessageHandler = () => {
        props.dispatch(addMessageAC())
    }

    const changeTxtAreaValue = () => {
        if (newMessageElement.current) {
            props.dispatch(changeDialogsTxtAreaValueAC(newMessageElement.current.value))
        }
    }

    const dialogItems = messages.messages.map(m => <DialogItem key={v1()} message={m.message}/>)

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