import React from 'react';
import s from "./Post.module.css";
import logo from "../../../../../img/my_logo.png";

const Post = () => {
    return (
        <div>
            <div className={s.post}>
                <img className={s.my_logo} src={logo} alt="my_logo"/>
                post1
                <div><span>like</span></div>
            </div>
        </div>
    );
};

export default Post;