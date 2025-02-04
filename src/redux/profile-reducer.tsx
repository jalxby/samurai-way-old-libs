import { Dispatch } from "redux";
import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "/network/profile/ADD-POST";
const DELETE_POST = "/network/profile/DELETE-POST";
const SET_USER_PROFILE = "/network/profile/SET-USER-PROFILE";
const SET_USER_STATUS = "/network/profile/SET-USER-STATUS";

export type PostType = {
  id: string;
  message: string;
  likes: number;
};

export type ProfileType = null | {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string;
    large: string;
  };
};

export type ProfilePageType = {
  posts: Array<PostType>;

  profile: ProfileType | null;
  status: string;
};

type ActionType =
  | AddPostActionType
  | SetUserProfileActionType
  | SetUserStatusActionType
  | DeletePostActionType;

type InitialStateType = typeof initialState;
const initialState = {
  posts: [
    {
      id: v1(),
      message: "Hi! How are you?",
      likes: 4,
    },
    {
      id: v1(),
      message: "Lorem ipsum dolor.",
      likes: 7,
    },
    {
      id: v1(),
      message: "Lorem ipsum dolor sit.",
      likes: 14,
    },
  ],

  profile: null,
  status: "",
} as ProfilePageType;

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: v1(), message: action.payload.post, likes: 0 },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload.postID),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.payload.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.payload.status };
    default:
      return state;
  }
};

//action creators

type AddPostActionType = ReturnType<typeof addPost>;
export const addPost = (post: string) => {
  return {
    type: ADD_POST,
    payload: {
      post,
    },
  } as const;
};

type DeletePostActionType = ReturnType<typeof deletePost>;
export const deletePost = (postID: string) => {
  return { type: DELETE_POST, payload: { postID } } as const;
};

type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    payload: {
      profile,
    },
  } as const;
};

type SetUserStatusActionType = ReturnType<typeof setUserStatus>;
export const setUserStatus = (status: string) => {
  return {
    type: SET_USER_STATUS,
    payload: {
      status,
    },
  } as const;
};

//thunks

export const getUserProfile =
  (userId: string) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(res.data));
  };

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(res.data));
};

export const updateUserStatus =
  (newStatus: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(newStatus);
    if (res.data.resultCode === 0) {
      dispatch(setUserStatus(newStatus));
    }
  };
