import React, {FC} from 'react';
import {addMessageAC, changeDialogsTxtAreaValueAC} from "../../../../redux/dialogs-reducer";
import {Store} from "redux";
import {StoreType} from "../../../../redux/redux-store";
import {ActionType} from "../../../../redux/Types";
import Dialog from "./Dialog";

type DialogContainer = {
    store: Store<StoreType, ActionType>
}
const DialogContainer: FC<DialogContainer> = (props) => {
    const messages = props.store.getState().messagesPage.messages
    const dialogsTxtAreaValue = props.store.getState().messagesPage.dialogsTxtAreaValue

    const addMessageHandler = () => {
        props.store.dispatch(addMessageAC())
    }

    const changeTxtAreaValueHandler = (text: string) => {
        if (text) {
            props.store.dispatch(changeDialogsTxtAreaValueAC(text))
        }
    }

    return (<Dialog messages={messages}
                    dialogsTxtAreaValue={dialogsTxtAreaValue}
                    addMessageCallback={addMessageHandler}
                    changeTxtAreaValueCallback={changeTxtAreaValueHandler}

    />);
};

export default DialogContainer;