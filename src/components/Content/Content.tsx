import React from 'react';
import head_logo from "../../img/head_content_img.png"
import s from "./Content.module.css"
import ProfileInfo from "./Profile/ProfileInfo";


const Content = () => {
    return (
        <div className={s.content}>
            <img src={head_logo} alt={'head_content_img'}/>
            <div>Main Content
                <ProfileInfo/>
            </div>


        </div>
    );
};

export default Content;