import React, { FC } from "react";
import s from "./Post.module.css";
import logo from "../../../../../img/my_logo.png";

type PostType = {
  message: string;
  likes: number;
};
const Post: FC<PostType> = (props) => {
  return (
    <div>
      <div className={s.post}>
        <img className={s.my_logo} src={logo} alt="my_logo" />
        {props.message}
        <div>
          <span>likes: {props.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
