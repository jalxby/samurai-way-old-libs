import React, {FC} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../../redux/state";

type MyPostsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changePostTxtAreaValue: (message: string) => void
}
const MyPosts: FC<MyPostsType> = ({profilePage, addPost, ...props}) => {
    const postsData = profilePage.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {

        addPost()

    }

    const txtAreaHandler = () => {
        if (newPostElement.current) {
            props.changePostTxtAreaValue(newPostElement.current.value)
        }
    }

    return (
        <div className={s.myPosts}>
            <fieldset>
                <legend>
                    <div><h3>My posts</h3></div>
                </legend>
                <div className={s.addPost}>
                    <div>
                        <textarea onChange={txtAreaHandler} value={profilePage.postTxtAreaValue}
                                  ref={newPostElement}></textarea>
                    </div>
                    <button onClick={addPostHandler} type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    <div className={s.posts}>
                        {postsData}
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default MyPosts;