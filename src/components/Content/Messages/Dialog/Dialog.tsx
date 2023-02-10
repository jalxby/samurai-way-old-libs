import React from 'react';
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";

const Dialog = () => {
    return (
        <div className={s.dialog}>

            <DialogItem message={'Hi!'}/>
            <DialogItem message={'It-kamasutra'}/>
            <DialogItem message={'How are you?'}/>

        </div>
    );
};

export default Dialog;