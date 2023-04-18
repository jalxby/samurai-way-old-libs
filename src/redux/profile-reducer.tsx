import { v1 } from "uuid";
import { Dispatch } from "redux";
import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_POST_TXT_AREA_VALUE = "CHANGE-POST-TXT-AREA-VALUE";
const SET_USER_PROFILE = "SET-USER-PROFILE";

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
  postTxtAreaValue: string;
  profile: ProfileType | null;
};

type ActionType =
  | AddPostActionType
  | ChangePostTxtAreaActionType
  | SetUserProfileActionType;

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
  postTxtAreaValue: "",
  profile: null,
  //   // userId: 1,
  //   // lookingForAJob: true,
  //   // lookingForAJobDescription: "looking",
  //   // fullName: "JA",
  //   // contacts: {
  //   //   github: "Git.com",
  //   //   vk: ",jkmit nelf yb yjujq",
  //   //   facebook: "facebook.com",
  //   //   instagram: "insta",
  //   //   twitter: "twitter",
  //   //   website: "website",
  //   //   youtube: "youtube",
  //   //   mainLink: "gmail",
  //   // },
  //   // photos: {
  //   //   small: "small",
  //   //   large: "large",
  //   // },
  // },
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
          { id: v1(), message: state.postTxtAreaValue, likes: 0 },
        ],
        postTxtAreaValue: "",
      };
    case CHANGE_POST_TXT_AREA_VALUE:
      return { ...state, postTxtAreaValue: action.payload.text };
    case SET_USER_PROFILE:
      return { ...state, profile: action.payload.profile };
    default:
      return state;
  }
};

type AddPostActionType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const;
};
type ChangePostTxtAreaActionType = ReturnType<typeof changePostTxtAreaValueAC>;
export const changePostTxtAreaValueAC = (text: string) => {
  return {
    type: CHANGE_POST_TXT_AREA_VALUE,
    payload: {
      text,
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
export const getProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
