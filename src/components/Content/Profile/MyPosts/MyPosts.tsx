import React, {FC} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, ProfilePageType} from "../../../../redux/Types";
import {addPostAC, changePostTxtAreaValueAC} from "../../../../redux/profile-reducer";
import {v1} from "uuid";

type MyPostsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

const MyPosts: FC<MyPostsType> = ({profilePage, ...props}) => {
    const postsData = profilePage.posts.map(p => <Post key={v1()} message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    const txtAreaHandler = () => {
        if (newPostElement.current) {
            props.dispatch(changePostTxtAreaValueAC(newPostElement.current.value))
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
                                  value={profilePage.postTxtAreaValue}
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