import { combineReducers } from "redux";

import convertDataSlice from "./converter/convertSlice";

export const rootReducer = combineReducers({
  convert: convertDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
