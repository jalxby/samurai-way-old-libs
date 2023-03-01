import React from 'react';
import {v1} from "uuid";
import {rerender} from "../render";

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
    //sidebar: add later!@ToDo
}

export type ProfilePageType = {
    posts: Array<PostType>
    postTxtAreaValue: string
}

export type MessagePageType = {
    friends: Array<FriendType>
    messages: Array<MessageType>
}
export type FriendType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}

export let state: StateType = {
    profilePage: {
        posts: [
            {
                id: v1(),
                message: "Hi! How are you?",
                likes: 4
            },
            {
                id: v1(),
                message: "Lorem ipsum dolor.",
                likes: 7
            },
            {
                id: v1(),
                message: "Lorem ipsum dolor sit.",
                likes: 14
            },
        ],
        postTxtAreaValue: ""
    },
    messagesPage: {
        friends: [
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

        ],
        messages: [
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
        ],
    },
    //sidebar:{}
}
// @ts-ignore
window.state = state
export const addPost = () => {
    state.profilePage.posts.push(
        {id: v1(), message: state.profilePage.postTxtAreaValue, likes: 0})
    state.profilePage.postTxtAreaValue = ''
    rerender(state)
}

export const changePostTxtAreaValue = (message: string) => {
    state.profilePage.postTxtAreaValue = message
    rerender(state)
}
