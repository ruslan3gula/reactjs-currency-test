export interface Rates {
  lastUpdate: string;
  base: string;
  rates: {};
}

export interface RatesData {
  isLoading: boolean;
  error: string | null;
  ratesData: Rates;
}
