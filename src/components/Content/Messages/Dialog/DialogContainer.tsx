import React from 'react';
import {addMessageAC, changeDialogsTxtAreaValueAC} from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../../redux/Types";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
        messages: state.messagesPage.messages,
        dialogsTxtAreaValue: state.messagesPage.dialogsTxtAreaValue
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        addMessageCallback: () => {
            dispatch(addMessageAC())
        },
        changeTxtAreaValueCallback: (text: string) => {
            if (text) {
                dispatch(changeDialogsTxtAreaValueAC(text))
            }
        }
    }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;