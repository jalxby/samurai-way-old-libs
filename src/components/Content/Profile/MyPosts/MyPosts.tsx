import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {v1} from "uuid";

const MyPosts = () => {

    let postsData = [
        {
            id: v1(),
            message: "Hi! How are you?",
            likes: 4
        },
        {
            id: v1(),
            message: "Lorem ipsum dolor.",
            likes: 7
        },
        {
            id: v1(),
            message: "Lorem ipsum dolor sit.",
            likes: 14
        },
    ]

    const posts = postsData.map(p => <Post message={p.message} likes={p.likes}/>)

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
                        {posts}
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default MyPosts;