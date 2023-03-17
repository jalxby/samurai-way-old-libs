import {addPostAC, changePostTxtAreaValueAC} from "./profile-reducer";
import {addMessageAC, changeDialogsTxtAreaValueAC} from "./dialogs-reducer";

export type ActionType =
    AddPostActionType
    | ChangePostTxtAreaActionType
    | AddMessageActionType
    | ChangeDialogsTxtAreaValueActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type ChangePostTxtAreaActionType = ReturnType<typeof changePostTxtAreaValueAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type ChangeDialogsTxtAreaValueActionType = ReturnType<typeof changeDialogsTxtAreaValueAC>


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