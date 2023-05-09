import { v1 } from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";

export type MessageType = {
  id: string;
  message: string;
};
export type FriendType = {
  id: string;
  name: string;
};
export type MessagesPageType = {
  friends: Array<FriendType>;
  messages: Array<MessageType>;
  dialogsTxtAreaValue: string;
};

type ActionType = AddMessageActionType;

type InitialMessagesPageStateType = typeof initialState;
const initialState = {
  friends: [
    {
      id: v1(),
      name: "Dimych",
    },
    {
      id: v1(),
      name: "Alex",
    },
    {
      id: v1(),
      name: "Victor",
    },
    {
      id: v1(),
      name: "Victor",
    },
    {
      id: v1(),
      name: "Sveta",
    },
  ],
  messages: [
    {
      id: v1(),
      message: "Hi!",
    },
    {
      id: v1(),
      message: "It-kamasutra",
    },
    {
      id: v1(),
      message: "How are you?",
    },
  ],
} as MessagesPageType;

export const dialogsReducer = (
  state: InitialMessagesPageStateType = initialState,
  action: ActionType
): InitialMessagesPageStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: v1(), message: action.payload.message },
        ],
        dialogsTxtAreaValue: "",
      };
    default:
      return state;
  }
};

type AddMessageActionType = ReturnType<typeof addMessage>;
export const addMessage = (message: string) => {
  return { type: ADD_MESSAGE, payload: { message } } as const;
};
