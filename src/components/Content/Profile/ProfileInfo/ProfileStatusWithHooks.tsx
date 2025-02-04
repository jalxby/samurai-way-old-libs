import React, { ChangeEvent, FC, useEffect, useState } from "react";

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};

export const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  function onEditMode() {
    setEditMode(true);
  }

  function offEditMode() {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setStatus(e.currentTarget.value);
  }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <>
      {!editMode ? (
        <div>
          <span onDoubleClick={onEditMode}>
            {props.status || "double click to set yours status"}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus={true}
            onBlur={offEditMode}
            type={"text"}
            value={status}
            onChange={onChangeInput}
          />
        </div>
      )}
    </>
  );
};
