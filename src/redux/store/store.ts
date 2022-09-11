import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "../rootSagaWatcher";

import { rootReducer } from "../rootReducer";

const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
  reducer: rootReducer,
  middleware: (applyMiddleware) => applyMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;
