import React from "react";
import { addMessage, MessageType } from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { StateType } from "../../../../redux/redux-store";
import { withAuthRedirect } from "../../../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
  messages: Array<MessageType>;
  isAuth: boolean;
};
type MapDispatchToProps = {
  addMessage: (message: string) => void;
};
export type DialogPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    messages: state.messagesPage.messages,
    isAuth: state.auth.isAuth,
  };
};
export const DialogContainer = connect(mapStateToProps, {
  addMessage,
})(withAuthRedirect(Dialog));
