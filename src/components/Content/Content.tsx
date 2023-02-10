import React from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";


const Content = () => {
    return (

        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/messages'} component={Messages}/>
            </div>
        </div>

    );
};

export default Content;