import { v1 } from "uuid";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_POST_TXT_AREA_VALUE = "CHANGE-POST-TXT-AREA-VALUE";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

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
  | SetUserStatusActionType;

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
    case SET_USER_PROFILE:
      return { ...state, profile: action.payload.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.payload.status };
    default:
      return state;
  }
};

type AddPostActionType = ReturnType<typeof addPost>;
export const addPost = (post: string) => {
  return {
    type: ADD_POST,
    payload: {
      post,
    },
  } as const;
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

export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    });
  };
};

export const updateUserStatus = (newStatus: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus).then((response) => {
      if (response.data.resoltCode === 0) {
        dispatch(setUserStatus(newStatus));
      }
    });
  };
};
