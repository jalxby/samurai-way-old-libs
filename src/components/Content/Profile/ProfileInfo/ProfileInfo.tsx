import React from 'react';
import s from "./ProfileInfo.module.css"
import logo from "../../../../img/my_logo.png";

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img className={s.my_logo} src={logo} alt="my_logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit sapiente tempore totam
                velit, vitae. Aspernatur, blanditiis consequuntur cum doloremque dolores ea eum exercitationem fugit
                nisi saepe, sed voluptates? Debitis.</p>
        </div>
    );
};

export default ProfileInfo;