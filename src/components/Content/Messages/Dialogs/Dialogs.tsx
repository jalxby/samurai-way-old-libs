import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {v1} from "uuid";

const Dialogs = () => {

    let dialogs = [
        {
            id: v1(),
            name: "Dimych"
        },
        {
            id: v1(),
            name: "Alex"
        },
        {
            id: v1(),
            name: "Victor"
        },
        {
            id: v1(),
            name: "Victor"
        },
        {
            id: v1(),
            name: "Sveta"
        },

    ]

    const dialogsItems = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
        </div>
    );
};

export default Dialogs;