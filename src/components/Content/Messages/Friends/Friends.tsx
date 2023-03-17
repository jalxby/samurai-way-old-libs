import React, {FC} from 'react';
import s from "./Friends.module.css"
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../../redux/Types";
import {v1} from "uuid";

type FriendsType = {
    friends: Array<FriendType>
}
const Friends: FC<FriendsType> = ({friends}) => {

    const dialogsItems = friends.map(d => <Friend key={v1()} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
        </div>
    );
};

export default Friends;