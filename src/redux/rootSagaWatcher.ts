import { fork } from "redux-saga/effects";

import { sagaConvertWatcher } from "./converter/saga";

export function* rootSaga() {

  yield fork(sagaConvertWatcher);
}
