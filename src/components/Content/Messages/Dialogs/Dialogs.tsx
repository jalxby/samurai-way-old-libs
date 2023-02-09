import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.item}><NavLink to={'/messages/1'}>Dimych</NavLink></div>
                <div className={s.item}><NavLink to={'/messages/2'}>Sveta</NavLink></div>
                <div className={s.item}><NavLink to={'/messages/3'}>Victor</NavLink></div>
                <div className={s.item}><NavLink to={'/messages/4'}>Alex</NavLink></div>
                <div className={s.item}><NavLink to={'/messages/5'}>Andrey</NavLink></div>
            </div>
        </div>
    );
};

export default Dialogs;