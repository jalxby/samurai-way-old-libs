import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../../Common/FormsControl/FormsControls";
import { maxCheck, requiredField } from "../../utils/validators/validators";

export type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const maxLength20 = maxCheck(20);

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  console.log("LoginForm rendering");
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name={"login"}
          placeholder={"Login"}
          component={Input}
          validate={[requiredField, maxLength20]}
        />
      </div>
      <div>
        <Field
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          name={"rememberMe"}
          placeholder={""}
          component={"input"}
        />
      </div>
      {props.error && <div>{props.error}</div>}
      <button type={"submit"}>login</button>
    </form>
  );
};
export const ReduxLoginForm = reduxForm<FormDataType>({ form: "loginForm" })(
  LoginForm
);
