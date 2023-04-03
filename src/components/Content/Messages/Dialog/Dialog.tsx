import React, { FC, RefObject } from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { v1 } from "uuid";
import { DialogPropsType } from "./DialogContainer";

const Dialog: FC<DialogPropsType> = (props) => {
  const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

  const addMessage = () => {
    props.addMessageCallback();
  };

  const changeTxtAreaValue = () => {
    if (newMessageElement.current) {
      props.changeTxtAreaValueCallback(newMessageElement.current.value);
    }
  };

  const dialogItems = props.messages.map((m) => (
    <DialogItem key={v1()} message={m.message} />
  ));

  return (
    <div className={s.dialog}>
      {dialogItems}
      <div>
        <textarea
          ref={newMessageElement}
          cols={50}
          rows={5}
          value={props.dialogsTxtAreaValue}
          onChange={changeTxtAreaValue}
        ></textarea>
      </div>
      <button onClick={addMessage} type="submit">
        Submit
      </button>
      <button type="reset">Reset</button>
    </div>
  );
};

export default Dialog;
