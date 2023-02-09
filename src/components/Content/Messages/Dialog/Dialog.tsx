import React from 'react';
import s from "./Dialog.module.css"

const Dialog = () => {
    return (
        <div className={s.dialog}>
            <div className={s.message}>Hi!</div>
            <div className={s.message}>It-kamasutra</div>
            <div className={s.message}>How are you?</div>
        </div>
    );
};

export default Dialog;