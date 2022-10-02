import { takeEvery, put, call } from "redux-saga/effects";
import { isApiCall } from "./isApiCall";
import { apiFunctionsMap } from "./apiFunctionsMap";
import { changePostfix } from "./changePostfix";

function* sagaWorker(action) {
  try {
    const callFunction = yield apiFunctionsMap(action);

    const response = yield call(callFunction, action.payload);

    yield put(changePostfix(action, response, "Success"));
  } catch (error) {
    yield put(changePostfix(action, error, "Failed"));
  }
}

function* sagaWatcher() {
  yield takeEvery(isApiCall, sagaWorker); //<--isApiCall - паттерн (true of false)
}

export default sagaWatcher;
