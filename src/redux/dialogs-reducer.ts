import { v1 } from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_DIALOGS_TXT_AREA_VALUE = "CHANGE-DIALOGS-TXT-AREA-VALUE";

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

type ActionType = AddMessageActionType | ChangeDialogsTxtAreaValueActionType;

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
  dialogsTxtAreaValue: "",
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
          { id: v1(), message: state.dialogsTxtAreaValue },
        ],
        dialogsTxtAreaValue: "",
      };
    case CHANGE_DIALOGS_TXT_AREA_VALUE:
      return { ...state, dialogsTxtAreaValue: action.payload.text };
    default:
      return state;
  }
};

type AddMessageActionType = ReturnType<typeof addMessage>;
export const addMessage = () => {
  return { type: ADD_MESSAGE } as const;
};
type ChangeDialogsTxtAreaValueActionType = ReturnType<
  typeof changeTxtAreaValue
>;
export const changeTxtAreaValue = (text: string) => {
  return {
    type: CHANGE_DIALOGS_TXT_AREA_VALUE,
    payload: {
      text,
    },
  } as const;
};
