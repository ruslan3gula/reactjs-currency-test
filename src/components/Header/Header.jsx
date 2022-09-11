import React, { useState, useEffect } from "react";

import "./Header.css";

export const Header = () => {
  const [rate, setRate] = useState("");

  useEffect(() => {
    fetch(
      "https://v1.nocodeapi.com/oxmax30/cx/CKZfwWTwAZdbwnwn/rates/convert?amount=1&from=eur&to=uah"
    )
      .then((res) => res.json())
      .then((data) => setRate(data.text));
  }, []);

  return (
    <div className="currency_display">
      <div className="currency_value">{rate && rate}</div>
    </div>
  );
};
