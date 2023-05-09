import React, { ChangeEvent, FC } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import { FormDataType, ReduxPostForm } from "./PostForm";

const MyPosts: FC<MyPostsPropsType> = (props) => {
  const postsData = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likes={p.likes} />
  ));

  const submit = (formData: FormDataType) => {
    props.addPost(formData.post);
    props.reset("post");
  };

  return (
    <div className={s.myPosts}>
      <fieldset>
        <legend>
          <div>
            <h3>My posts</h3>
          </div>
        </legend>
        <div className={s.addPost}>
          <ReduxPostForm onSubmit={submit} />
          <div className={s.posts}>{postsData}</div>
        </div>
      </fieldset>
    </div>
  );
};

export default MyPosts;
