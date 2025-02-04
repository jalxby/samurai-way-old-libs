import store from "./redux-store";
import {
  addMessage,
  dialogsReducer,
  MessagesPageType,
} from "./dialogs-reducer";

let testedState: MessagesPageType;
beforeEach(() => {
  testedState = { ...store.getState().messagesPage };
});

test("adding message should be corrected", () => {
  testedState.dialogsTxtAreaValue = "Message";

  const action = dialogsReducer(testedState, addMessage("Message"));

  expect(action.messages.length).toBe(4);
  expect(action.messages[action.messages.length - 1].message).toBe("Message");
  expect(action.dialogsTxtAreaValue).toBe("");
});

// test("updating dialogsTxtAreaValue property", () => {
//   const newTxtValue = "NewTxtValue";
//
//   const action = dialogsReducer(
//     testedState,
//   );
//
//   expect(action.dialogsTxtAreaValue).toBe(newTxtValue);
// });
