import store from "./redux-store";

let testedState

beforeEach(() => {
    testedState = {...store.getState().usersPage}
})

test('set  following user', () => {

})