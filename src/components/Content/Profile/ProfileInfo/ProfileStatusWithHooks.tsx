import React, { ChangeEvent, FC, useState } from "react";

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};
type InitStateType = {
  editMode: boolean;
  status: string;
};
export const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  const initState: InitStateType = {
    editMode: false,
    status: props.status,
  };
  const [state, setState] = useState<InitStateType>(initState);

  function onEditMode() {
    setState({ ...state, editMode: true });
  }

  function offEditMode() {
    setState({ ...state, editMode: false });
    props.updateUserStatus(state.status);
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, status: e.currentTarget.value });
  }

  return (
    <>
      {!state.editMode ? (
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
            value={state.status}
            onChange={onChangeInput}
          />
        </div>
      )}
    </>
  );
};
