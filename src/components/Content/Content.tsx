import React from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import ProfileInfo from "./Profile/ProfileInfo";
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";


const Content = () => {
    return (

        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>
                <Route path={'/profile'} component={ProfileInfo}/>
                <Route path={'/messages'} component={Messages}/>
            </div>
        </div>

    );
};

export default Content;