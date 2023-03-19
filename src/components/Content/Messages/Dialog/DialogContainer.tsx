import React from 'react';
import {addMessageAC, changeDialogsTxtAreaValueAC} from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {ActionType, MessageType} from "../../../../redux/Types";
import {Dispatch} from "redux";
import {StoreType} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    messages: Array<MessageType>
    dialogsTxtAreaValue: string
}
type MapDispatchToProps = {
    addMessageCallback: () => void
    changeTxtAreaValueCallback: (text: string) => void
}
export type DialogPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: StoreType) => {
    return {
        messages: state.messagesPage.messages,
        dialogsTxtAreaValue: state.messagesPage.dialogsTxtAreaValue
    }
}


const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToProps => {
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