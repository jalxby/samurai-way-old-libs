import React, {FC} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../../redux/Types";
import {v1} from "uuid";

type MyPostsType = {
    profilePage: ProfilePageType
    postTxtAreaValue: string
    addPostCallback: () => void
    txtAreaCallback: (text: string) => void
}

const MyPosts: FC<MyPostsType> = ({profilePage, postTxtAreaValue, addPostCallback, txtAreaCallback}) => {
    const postsData = profilePage.posts.map(p => <Post key={v1()} message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        addPostCallback()
    }

    const txtAreaHandler = () => {
        if (newPostElement.current) {
            txtAreaCallback(newPostElement.current.value)
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
                        <textarea onChange={txtAreaHandler}
                                  value={postTxtAreaValue}
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