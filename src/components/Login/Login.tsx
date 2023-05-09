import React from "react";
import { FormDataType, ReduxLoginForm } from "./LoginForm";
import { LoginPropsType } from "./LoginContainer";
import { Redirect } from "react-router-dom";

const Login = (props: LoginPropsType) => {
  const submit = (formData: FormDataType) => {
    props.logIn(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>LOGIN</h1>
      <ReduxLoginForm onSubmit={submit} />
    </div>
  );
};

export default Login;
