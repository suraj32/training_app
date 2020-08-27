import { LOGIN_REDUCER } from "../shared/actionConstants";
import { takeLatest, call, put, all } from "redux-saga/effects";
import login from "../apis/loginApi";
import { setUserDetails, loginFailed } from "../actions/loginActions"

export function* loginSaga(action) {
  try {
    console.log(action);
    const { data } = yield call(login, action.value);
    yield put(setUserDetails(data));
  } catch(error) {
    console.log(error)
    yield put(loginFailed(error));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginSaga),
  ]);
}
