import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ConverterResponse,
  ConverterStore,
  ConvertParams,
} from "../../types/convert";

const initialState: ConverterStore = {
  isLoading: false,
  error: null,
  convertData: {
    query: {},
    data: { result: "", info: { time: 0 } },
    result: null,
    text: "",
  },
};

const convertDataSlice = createSlice({
  name: "convertDataReducer",
  initialState,
  reducers: {
    fetchConvert: (
      state: ConverterStore,
      action: PayloadAction<ConvertParams>
    ) => {
      state.isLoading = true;
    },

    fetchConvertSuccess: (
      state: ConverterStore,
      action: PayloadAction<ConverterResponse>
    ) => {
      state.isLoading = false;

      state.convertData = action.payload;
    },
    fetchConvertError: (
      state: ConverterStore,
      action: PayloadAction<string | null>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default convertDataSlice.reducer;

export const { fetchConvert, fetchConvertSuccess, fetchConvertError } =
  convertDataSlice.actions;
