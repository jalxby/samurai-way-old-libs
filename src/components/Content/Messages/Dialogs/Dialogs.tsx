import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem/DialogsItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={'Dimych'} id={1}/>
                <DialogsItem name={'Sveta'} id={2}/>
                <DialogsItem name={'Victor'} id={3}/>
                <DialogsItem name={'Alex'} id={4}/>
                <DialogsItem name={'Andrey'} id={5}/>
            </div>
        </div>
    );
};

export default Dialogs;