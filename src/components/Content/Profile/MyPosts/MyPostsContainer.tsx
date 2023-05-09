import React from "react";
import { addPost, PostType } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { StateType } from "../../../../redux/redux-store";
import { reset } from "redux-form";

type MapStatePropsType = {
  posts: PostType[];
};
type MapDispatchPropsType = {
  addPost: (post: string) => void;
  reset: (form: string) => void;
};
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, reset })(MyPosts);
export default MyPostsContainer;
