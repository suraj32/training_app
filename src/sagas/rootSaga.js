import userSaga from "./userSaga";
import projectSaga from "./projectSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    userSaga(),
    projectSaga()
  ]);
}
