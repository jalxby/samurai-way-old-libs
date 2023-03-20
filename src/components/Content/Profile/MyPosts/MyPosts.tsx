import React, {ChangeEvent, FC} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {v1} from "uuid";
import TextField from '@mui/material/TextField';
import {ProfilePageType} from "../../../../redux/Types";

type MyPostsType = {
    profilePage: ProfilePageType
    postTxtAreaValue: string
    addPostCallback: () => void
    txtAreaCallback: (text: string) => void
}

const MyPosts: FC<MyPostsType> = (props) => {
    const postsData = props.profilePage.posts.map(p => <Post key={v1()} message={p.message} likes={p.likes}/>)
    // const [value, setValue] = useState<string>()
    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.addPostCallback()
    }

    const txtAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.txtAreaCallback(e.currentTarget.value)
    }
    return (
        <div className={s.myPosts}>
            <fieldset>
                <legend>
                    <div><h3>My posts</h3></div>
                </legend>
                <div className={s.addPost}>
                    <div>
                        {/*<textarea onChange={txtAreaHandler}*/}
                        {/*          value={props.postTxtAreaValue}*/}
                        {/*          ref={newPostElement}></textarea>*/}
                        <TextField
                            onChange={txtAreaHandler}
                            value={props.postTxtAreaValue}
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                        />
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