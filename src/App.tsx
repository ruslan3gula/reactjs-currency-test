import React from "react";
import "./App.css";
import { Converter } from "./components/index";
import { Header } from "./components/index";
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Converter />
    </div>
  );
};
