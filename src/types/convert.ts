export type ConverterResponse = {
  query: {};
  data: { result?: string; info: { time?: number } };
  result: number | null;
  text: string;
};

export type ConverterStore = {
  isLoading: boolean;
  error: null | string;
  convertData: ConverterResponse;
};

export type ConvertParams = {
  amount: string;
  from: string;
  to: string;
};
