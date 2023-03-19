import React, {FC} from 'react';
import s from "./Friends.module.css"
import {Friend} from "./Friend/Friend";
import {v1} from "uuid";
import {FriendType} from "../../../../redux/Types";

type FriendsType = {
    friends: Array<FriendType>
}
const Friends: FC<FriendsType> = (props) => {


    const dialogsItems = props.friends.map(d => <Friend key={v1()} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
        </div>
    );
};

export default Friends;