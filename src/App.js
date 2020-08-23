// App.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./Routes/Routes";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
