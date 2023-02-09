import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi! How are you?'}/>
                <Post message={'Lorem ipsum dolor.'}/>
                <Post message={'Lorem ipsum dolor sit.'}/>
            </div>

        </div>
    );
};

export default MyPosts;