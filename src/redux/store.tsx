import React from 'react';
import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

type ObserverType = (state: StateType) => void
type Action = 'ADD-POST' | 'GET-STATE' | 'CHANGE-POST-TXT-AREA-VALUE' | 'CHANGE-DIALOGS-TXT-AREA-VALUE' | 'ADD-MESSAGE';
type StoreType = {
    _state: StateType,
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    //sidebar: add later!@ToDo
}
export type ProfilePageType = {
    posts: Array<PostType>
    postTxtAreaValue: string
}
export type MessagesPageType = {
    friends: Array<FriendType>
    messages: Array<MessageType>
    dialogsTxtAreaValue: string
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
export type ActionType = {
    type: Action
    payload?: any
}

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: v1(),
//                     message: "Hi! How are you?",
//                     likes: 4
//                 },
//                 {
//                     id: v1(),
//                     message: "Lorem ipsum dolor.",
//                     likes: 7
//                 },
//                 {
//                     id: v1(),
//                     message: "Lorem ipsum dolor sit.",
//                     likes: 14
//                 },
//             ],
//             postTxtAreaValue: ''
//         },
//         messagesPage: {
//             friends: [
//                 {
//                     id: v1(),
//                     name: "Dimych"
//                 },
//                 {
//                     id: v1(),
//                     name: "Alex"
//                 },
//                 {
//                     id: v1(),
//                     name: "Victor"
//                 },
//                 {
//                     id: v1(),
//                     name: "Victor"
//                 },
//                 {
//                     id: v1(),
//                     name: "Sveta"
//                 },
//
//             ],
//             messages: [
//                 {
//                     id: v1(),
//                     message: "Hi!"
//                 },
//                 {
//                     id: v1(),
//                     message: "It-kamasutra"
//                 },
//                 {
//                     id: v1(),
//                     message: "How are you?"
//                 },
//             ],
//             dialogsTxtAreaValue: ''
//         },
//         //sidebar:{}
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: ObserverType) {
//         this._callSubscriber = observer
//
//     },
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._callSubscriber(this._state)
//     }
// }










