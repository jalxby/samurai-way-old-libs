import {
  addPost,
  deletePost,
  ProfilePageType,
  profileReducer,
  setUserProfile,
  setUserStatus,
} from "./profile-reducer";
import { MessagesPageType } from "./dialogs-reducer";
import store from "./redux-store";
import { v1 } from "uuid";

let testedState: ProfilePageType;
beforeEach(() => {
  testedState = { ...store.getState().profilePage };
});

test("new post should be added", () => {
  let action = addPost("89 lesson social network!");
  let newState = profileReducer(testedState, action);

  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("89 lesson social network!");
  expect(newState.posts[3].likes).toBe(0);
});

test("after deleting length of messages decreased", () => {
  let action = deletePost(testedState.posts[0].id);
  let newState = profileReducer(testedState, action);

  expect(newState.posts.length).toBe(2);
});

describe("Profile Reducer", () => {
  it("should add a new post to the state", () => {
    const initialState = {
      posts: [],
      profile: null,
      status: "",
    };

    const newPost = {
      id: v1(),
      message: "New post",
      likes: 0,
    };

    const action = addPost(newPost.message);
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
    expect(newState.posts[0].message).toBe(newPost.message);
  });

  it("should delete a post from the state", () => {
    const postIdToDelete = "1";
    const initialState = {
      posts: [
        {
          id: "1",
          message: "Post 1",
          likes: 5,
        },
        {
          id: "2",
          message: "Post 2",
          likes: 10,
        },
      ],
      profile: null,
      status: "",
    };

    const action = deletePost(postIdToDelete);
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(1);
    expect(newState.posts.some((post) => post.id === postIdToDelete)).toBe(
      false
    );
  });

  it("should set user profile in the state", () => {
    const initialState = {
      posts: [],
      profile: null,
      status: "",
    };

    const newProfile = {
      userId: 1,
      lookingForAJob: true,
      lookingForAJobDescription: "Looking for a job",
      fullName: "John Doe",
      contacts: {
        github: "github.com/johndoe",
        vk: "vk.com/johndoe",
        facebook: "facebook.com/johndoe",
        instagram: "instagram.com/johndoe",
        twitter: "twitter.com/johndoe",
        website: "johndoe.com",
        youtube: "youtube.com/johndoe",
        mainLink: "johndoe.com",
      },
      photos: {
        small: "johndoe.com/small.jpg",
        large: "johndoe.com/large.jpg",
      },
    };

    const action = setUserProfile(newProfile);
    const newState = profileReducer(initialState, action);

    expect(newState.profile).toEqual(newProfile);
  });

  it("should set user status in the state", () => {
    const initialState = {
      posts: [],
      profile: null,
      status: "",
    };

    const newStatus = "New status";

    const action = setUserStatus(newStatus);
    const newState = profileReducer(initialState, action);

    expect(newState.status).toBe(newStatus);
  });
});
