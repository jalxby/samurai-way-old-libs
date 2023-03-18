import React, {FC, useContext} from 'react';
import {addMessageAC, changeDialogsTxtAreaValueAC} from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {StoreContext} from "../../../../StoreContext";

type DialogContainer = {
    // store: Store<StoreType, ActionType>
}
const DialogContainer: FC<DialogContainer> = (props) => {
    const store = useContext(StoreContext)
    const messages = store.getState().messagesPage.messages
    const dialogsTxtAreaValue = store.getState().messagesPage.dialogsTxtAreaValue

    const addMessageHandler = () => {
        store.dispatch(addMessageAC())
    }

    const changeTxtAreaValueHandler = (text: string) => {
        if (text) {
            store.dispatch(changeDialogsTxtAreaValueAC(text))
        }
    }

    return (<Dialog messages={messages}
                    dialogsTxtAreaValue={dialogsTxtAreaValue}
                    addMessageCallback={addMessageHandler}
                    changeTxtAreaValueCallback={changeTxtAreaValueHandler}

    />);
};

export default DialogContainer;