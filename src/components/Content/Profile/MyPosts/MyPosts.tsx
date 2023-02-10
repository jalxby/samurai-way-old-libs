import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <fieldset>
                <legend>
                    <div><h3>My posts</h3></div>
                </legend>
                <div className={s.addPost}>
                    <div><textarea cols={50} rows={5}></textarea></div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    <div className={s.posts}>
                        <Post message={'Hi! How are you?'}/>
                        <Post message={'Lorem ipsum dolor.'}/>
                        <Post message={'Lorem ipsum dolor sit.'}/>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default MyPosts;