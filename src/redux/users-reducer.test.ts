import store, { StateType } from "./redux-store";
import { follow, usersReducer } from "./users-reducer";

let testedState: StateType;

beforeEach(() => {
  testedState = { ...store.getState() };
});

test("set  following user", () => {
  const action0 = usersReducer(
    testedState.usersPage,
    follow(testedState.usersPage.items[0].id)
  );
  const action1 = usersReducer(
    testedState.usersPage,
    follow(testedState.usersPage.items[1].id)
  );
  expect(action0.items[0].followed).toBe(true);
  expect(action1.items[1].followed).toBe(true);
});
