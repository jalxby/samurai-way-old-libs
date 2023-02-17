import React from 'react';
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {v1} from "uuid";

const Dialog = () => {

    let messages = [
        {
            id: v1(),
            message: "Hi!"
        },
        {
            id: v1(),
            message: "It-kamasutra"
        },
        {
            id: v1(),
            message: "How are you?"
        },
    ]

    const dialogItems = messages.map(m => <DialogItem message={m.message}/>)

    return (
        <div className={s.dialog}>

            {dialogItems}

        </div>
    );
};

export default Dialog;