import React from "react";
import {FormDataType, ReduxLoginForm} from "./LoginForm";


const Login = () => {
    const submit=(formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <div style={{padding:20}}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={submit}/>
        </div>
    );
};

export default Login;
