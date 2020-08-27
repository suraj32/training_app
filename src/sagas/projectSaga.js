import { PROJECT_REDUCER } from "../shared/actionConstants";
import { takeLatest, call, put, all } from "redux-saga/effects";
import getProjectsApi from "../apis/projectApi";
import { setProjects } from "../actions/projectActions";

export function* getProjectsSaga(action) {
  try {
    console.log('Inside project saga');
    const { data } = yield call(getProjectsApi);
    yield put(setProjects(data));
  } catch(error) {
    console.log(error);
  }
}

export default function* projectSaga() {
  yield all([
    takeLatest(PROJECT_REDUCER.GET_PROJECTS, getProjectsSaga),
  ]);
}
