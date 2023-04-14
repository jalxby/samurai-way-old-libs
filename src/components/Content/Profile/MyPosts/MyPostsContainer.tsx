import React from "react";
import {
  addPostAC,
  changePostTxtAreaValueAC,
  PostType,
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateType } from "../../../../redux/redux-store";

type MapStatePropsType = {
  posts: PostType[];
  postTxtAreaValue: string;
};
type MapDispatchPropsType = {
  addPostCallback: () => void;
  txtAreaCallback: (text: string) => void;
};
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    postTxtAreaValue: state.profilePage.postTxtAreaValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPostCallback: () => {
      dispatch(addPostAC());
    },
    txtAreaCallback: (text: string) => {
      dispatch(changePostTxtAreaValueAC(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
