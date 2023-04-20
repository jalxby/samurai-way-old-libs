import React from "react";
import {
  addMessageAC,
  changeDialogsTxtAreaValueAC,
  MessageType,
} from "../../../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateType } from "../../../../redux/redux-store";

type MapStateToPropsType = {
  messages: Array<MessageType>;
  isAuth: boolean;
  dialogsTxtAreaValue: string;
};
type MapDispatchToProps = {
  addMessageCallback: () => void;
  changeTxtAreaValueCallback: (text: string) => void;
};
export type DialogPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    messages: state.messagesPage.messages,
    isAuth: state.auth.isAused,
    dialogsTxtAreaValue: state.messagesPage.dialogsTxtAreaValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    addMessageCallback: () => {
      dispatch(addMessageAC());
    },
    changeTxtAreaValueCallback: (text: string) => {
      if (text) {
        dispatch(changeDialogsTxtAreaValueAC(text));
      }
    },
  };
};
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
