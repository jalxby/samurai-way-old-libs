import React, {FC} from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {ActionType, StateType} from "../../redux/Types";

type ContentType = {
    state: StateType
    dispatch: (action: ActionType) => void
}
const Content: FC<ContentType> = ({state, ...props}) => {

    return (

        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>
                <Route path={'/profile'}
                       render={() => <Profile
                           profilePage={state.profilePage}
                           dispatch={props.dispatch}
                       />
                       }/>
                <Route path={'/messages'}
                       render={() => <Messages
                           messagesPage={state.messagesPage}
                           dispatch={props.dispatch}
                       />
                       }/>
            </div>
        </div>

    );
};

export default Content;