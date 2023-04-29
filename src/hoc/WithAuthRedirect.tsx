import React from "react";
import {Redirect} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean;
};


export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    return (props: T & MapStatePropsType) => {
        console.log(props.isAuth);
        if (!props.isAuth) {
            return <Redirect to={"/login"}/>;
        }
        return <Component {...props}/>;
    };
}
