import React from "react";
import {addMessage, changeTxtAreaValue, MessageType,} from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";
import {withAuthRedirect} from "../../../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    messages: Array<MessageType>;
    dialogsTxtAreaValue: string;
    isAuth: boolean
};
type MapDispatchToProps = {
    addMessage: () => void;
    changeTxtAreaValue: (text: string) => void;
};
export type DialogPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        messages: state.messagesPage.messages,
        dialogsTxtAreaValue: state.messagesPage.dialogsTxtAreaValue,
        isAuth: state.auth.isAused,
    };
};
export const DialogContainer = connect(mapStateToProps, {
    addMessage,
    changeTxtAreaValue,
})(withAuthRedirect(Dialog));
