import React, { FC, useEffect } from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { DialogPropsType } from "./DialogContainer";
import { v1 } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";

type DialogFormType = {
  dialogInput: string;
};

const Dialog: FC<DialogPropsType> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors, isSubmitSuccessful },
  } = useForm<DialogFormType>({ mode: "onTouched" });

  const dialogItems = props.messages.map((m) => (
    <DialogItem key={v1()} message={m.message} />
  ));

  const onSubmit: SubmitHandler<DialogFormType> = (data) => {
    props.addMessage(data.dialogInput);
  };

  useEffect(() => {
    setFocus("dialogInput");
    if (isSubmitSuccessful) {
      reset({ dialogInput: "" });
    }
  }, [isSubmitSuccessful, setFocus]);

  return (
    <div className={s.dialog}>
      {dialogItems}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ border: errors && "solid red 2px" }}
          {...register("dialogInput", {
            required: "Name is required!",
            maxLength: { value: 10, message: "Max message length exceeded" },
          })}
        ></input>
        <button type="submit" disabled={!!errors.dialogInput}>
          Submit
        </button>
        <div>
          {errors.dialogInput && (
            <div style={{ color: "red" }}>{errors.dialogInput.message}</div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Dialog;
