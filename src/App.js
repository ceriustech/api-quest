// App.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </div>
  );
};

export default App;
