import { all } from "redux-saga/effects";

import sagaWatcher from "./index";

function* rootSaga() {
  yield all([sagaWatcher()]); //<---чтобы добавлять сюда еще саги
}

export default rootSaga;
