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
import { withAuthRedirect } from "../../../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
  messages: Array<MessageType>;
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

const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialog));

export default DialogContainer;
