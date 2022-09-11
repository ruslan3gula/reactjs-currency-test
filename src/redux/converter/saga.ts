import { call, put, takeLatest, all } from "redux-saga/effects";

import webApi from "../store/services/webApi";
import {
  fetchConvert,
  fetchConvertError,
  fetchConvertSuccess,
} from "./convertSlice";

type ConvertParams = {
  payload: { amount: string; from: string; to: string };
};

function* getConvertWorker({ payload }: ConvertParams) {
  try {
    //@ts-ignore
    const data = yield call(webApi.convert, payload);
    yield put(fetchConvertSuccess(data));
  } catch (error) {
    yield put(fetchConvertError(JSON.stringify(error)));
  }
}

export function* sagaConvertWatcher() {
  yield all([takeLatest<any>(fetchConvert, getConvertWorker)]);
}
