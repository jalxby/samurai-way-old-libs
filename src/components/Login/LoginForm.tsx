import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
export type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm:FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field type="text" name={'login'} placeholder={'Login'} component={'input'}/></div>
            <div><Field type="text" name={'password'} placeholder={'Password'} component={'input'}/></div>
            <div><Field type="checkbox" name={'rememberMe'} placeholder={''} component={'input'}/></div>
            <button type={'submit'}>login</button>
        </form>
    );
};
export const ReduxLoginForm = reduxForm<FormDataType>({form: 'loginForm'})(LoginForm)
