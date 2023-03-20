import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import {UserType} from "../../../redux/users-reducer";
import axios from "axios";
import {v1} from "uuid";

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items)
            })
        props.setUsers({
                users: [
                    {
                        id: v1(),
                        avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
                        fullName: 'Alexander',
                        status: 'I am looking for a Job right now...',
                        location: {
                            city: 'Gdansk',
                            country: 'Poland'
                        },
                        followed: true
                    },
                    {
                        id: v1(),
                        avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
                        fullName: 'Valera',
                        status: 'I like football!',
                        location: {
                            city: 'Grodno',
                            country: 'Belarus'
                        },
                        followed: false
                    },
                    {
                        id: v1(),
                        avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
                        fullName: 'Sofia',
                        status: 'I am so pretty',
                        location: {
                            city: 'Minsk',
                            country: 'Belarus'
                        },
                        followed: true
                    },
                    {
                        id: v1(),
                        avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
                        fullName: 'Polly',
                        status: 'I am here to help you to create good Video Production',
                        location: {
                            city: 'United States',
                            country: 'Philadelphia'
                        },
                        followed: false
                    },
                ]
            }
        )
    }

    const users = props.users.map(u => {
        const onClickButtonHandler = (user: UserType) => {
            return user.followed ? () => props.unfollow(user.id) : () => props.follow(user.id)
        }
        const buttonName = u.followed ? 'Unfollow' : 'Follow'
        return (
            <div key={u.id} className={s.user}>
                <div className={s.avatarAndButton}>
                    <img className={s.usersAvatar} src={u.avatarUrl} alt={'userLogo'}/>
                    <button onClick={onClickButtonHandler(u)}>{buttonName}</button>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>{u.fullName}</div>
                    <div className={s.status}>{u.status}</div>
                    <div className={s.location}>
                        <div>
                            {u.location.country},
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </div>
                </div>

            </div>
        )
    })


    return (
        <div>
            {users}
        </div>
    );
};

// props.setUsers({
//         users: [
//             {
//                 id: v1(),
//                 avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
//                 fullName: 'Alexander',
//                 status: 'I am looking for a Job right now...',
//                 location: {
//                     city: 'Gdansk',
//                     country: 'Poland'
//                 },
//                 followed: true
//             },
//             {
//                 id: v1(),
//                 avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
//                 fullName: 'Valera',
//                 status: 'I like football!',
//                 location: {
//                     city: 'Grodno',
//                     country: 'Belarus'
//                 },
//                 followed: false
//             },
//             {
//                 id: v1(),
//                 avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
//                 fullName: 'Sofia',
//                 status: 'I am so pretty',
//                 location: {
//                     city: 'Minsk',
//                     country: 'Belarus'
//                 },
//                 followed: true
//             },
//             {
//                 id: v1(),
//                 avatarUrl: 'https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg',
//                 fullName: 'Polly',
//                 status: 'I am here to help you to create good Video Production',
//                 location: {
//                     city: 'United States',
//                     country: 'Philadelphia'
//                 },
//                 followed: false
//             },
//         ]
//     }
// )