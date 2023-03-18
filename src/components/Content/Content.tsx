import React, {FC} from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {Store} from "redux";
import {StoreType} from "../../redux/redux-store";
import {ActionType} from "../../redux/Types";

type ContentType = {
    store: Store<StoreType, ActionType>
}
const Content: FC<ContentType> = (props) => {

    return (

        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>
                <Route path={'/profile'}
                       render={() => <Profile
                           store={props.store}
                       />
                       }/>
                <Route path={'/messages'}
                       render={() => <Messages
                           store={props.store}
                       />
                       }/>
            </div>
        </div>

    );
};

export default Content;