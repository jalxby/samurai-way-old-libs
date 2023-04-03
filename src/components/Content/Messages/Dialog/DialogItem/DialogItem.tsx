import React, { FC } from "react";
import s from "../Dialog.module.css";

type DialogItemType = {
  message: string;
};
const DialogItem: FC<DialogItemType> = (props) => {
  return (
    <div>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default DialogItem;
