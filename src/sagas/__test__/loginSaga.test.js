import { loginSaga } from "../userSaga";
import { loginRequest, setUserDetails } from "../../actions/loginActions";
import login from "../../apis/loginApi";
import { takeLatest, call, put, all } from "redux-saga/effects";

describe("Login Saga", () => {
  let gen, action;

  const response = {
    data: {
      id: 1,
      username: 1,
      auth_token: 'test'
    }
  }

  beforeEach(() => {
    action = loginRequest({email: "abcd", password: "pass"})
    gen = loginSaga(action)
  })

  it("Must call api", () => {
    expect(gen.next().value).toEqual(call(login, action.value))
  })

  it("Must dispatch success action", () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(setUserDetails(response.data)))
    expect(gen.next().done).toEqual(true);
  })

  // it("Must dispatch failure action", () => {
  //   gen.next();
  //   expect(gen.throw(error).value).toEqual()
  // })
})
