import React, {FC} from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {StateType} from "../../redux/state";

type ContentType = {
    state: StateType
    addPost: () => void
    changePostTxtAreaValue: (message: string) => void
}
const Content: FC<ContentType> = ({state, addPost, ...props}) => {

    return (

        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>
                <Route path={'/profile'} render={() => <Profile
                    addPost={addPost}
                    profilePage={state.profilePage}
                    changePostTxtAreaValue={props.changePostTxtAreaValue}
                />
                }/>
                <Route path={'/messages'} render={() => <Messages messagesPage={state.messagesPage}/>}/>
            </div>
        </div>

    );
};

export default Content;