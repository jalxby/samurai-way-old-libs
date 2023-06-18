import React from "react";
import s from "./FormControl.module.css";

export const Textarea = ({ input, meta, ...props }: any) => {
  return (
    <div
      className={`${s.formControl} ${meta.touched && meta.error && s.error}`}
    >
      <textarea {...input} {...props} />
      <div>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }: any) => {
  return (
    <div
      className={`${s.formControl} ${meta.touched && meta.error && s.error}`}
    >
      <input {...input} {...props} />
      <div>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
    </div>
  );
};
