import store, { StateType } from "./redux-store";
import { follow, UsersPageType, usersReducer } from "./users-reducer";

let testedState: UsersPageType;

beforeEach(() => {
  testedState = { ...store.getState().usersPage };
});

test("set  following user", () => {
  const action0 = usersReducer(testedState, follow(testedState.items[0].id));
  const action1 = usersReducer(testedState, follow(testedState.items[1].id));
  expect(action0.items[0].followed).toBe(true);
  expect(action1.items[1].followed).toBe(true);
});
