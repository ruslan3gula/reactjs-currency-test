import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { currencies } from "../../constants/currenciesArray";
import { fetchConvert } from "../../redux/converter/convertSlice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "../index";
import "./Converter.css";
import { minHeight } from "@mui/system";

export const Converter = () => {
  const [amount, setAmount] = useState("0");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [currentFocus, setCurrentFocus] = useState("");

  const debouncedAmount = useDebounce(amount, 1000);

  const conversionResult = useTypedSelector(
    (state) => state.convert.convertData
  );

  const conversionTime = useTypedSelector(
    (state) => state.convert.convertData.data.info.time
  );

  const isLoading = useTypedSelector((state) => state.convert.isLoading);

  const dispatch = useDispatch();

  const convertViaRedux = (value: any, currentCurrency: string) => {
    if (currentCurrency === "currency1") {
      dispatch(fetchConvert({ amount: value, to, from }));
    } else {
      dispatch(fetchConvert({ amount: value, from: to, to: from }));
    }
  };

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };
  const handleChangeTo = (event: SelectChangeEvent) => {
    setTo(event.target.value as string);
  };

  const handleCurrency = (e: any) => {
    if (currencyNotSelected()) {
      alert("Please select currency first");
    } else {
      setAmount(e.target.value);
      convertViaRedux(e.target.value, currentFocus);
    }
  };

  const currencyNotSelected = () => {
    if (to === "" || from === "") return true;
  };

  return (
    <div>
      {isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}

      <div className="currency_container">
        <div className="currency_input">
          <div className="input_container">
            <input
              className="currency1"
              type="text"
              value={
                currentFocus === "currency1"
                  ? amount
                  : Number(conversionResult.data.result).toFixed(2)
              }
              onFocus={(e) => {
                setAmount(e.target.value);
                setCurrentFocus("currency1");
                // convertViaRedux(e.target.value, "currency1");
              }}
              onChange={(e) => handleCurrency(e)}
            />
            <input
              className="currency2"
              type="text"
              value={
                currentFocus === "currency2"
                  ? amount
                  : Number(conversionResult.data.result).toFixed(2)
              }
              onFocus={(e) => {
                setAmount(e.target.value);
                setCurrentFocus("currency2");
                // convertViaRedux(e.target.value, "currency2");
              }}
              onChange={(e) => handleCurrency(e)}
            />
          </div>
          <div className="select-container">
            <Box sx={{ minWidth: 120, minHeight: 116 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">FROM</InputLabel>
                <Select
                  sx={{ minHeight: 120 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={from}
                  onChange={handleChangeFrom}
                >
                  {currencies.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">TO</InputLabel>
                <Select
                  sx={{ minHeight: 120 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={to}
                  onChange={handleChangeTo}
                >
                  {currencies.map((item: any) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
