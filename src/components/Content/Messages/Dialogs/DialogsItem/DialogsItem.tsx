import React, {FC} from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string
    id: number
}
export const DialogsItem: FC<DialogsItemType> = (props) => {
    let path = '/messages/' + props.id
    return (
        <div className={s.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}