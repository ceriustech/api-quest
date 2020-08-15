import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import axios from "axios";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";

import "./App.css";

class App extends Component {
  state = {
    categories: [],
    search: "",
  };

  componentDidMount() {
    axios
      .get(`https://api.publicapis.org/categories`)
      .then((response) => response.data)
      .then((apiCategoires) => {
        this.setState({ categories: apiCategoires });
        console.log(apiCategoires);
        console.log(this.state);
      });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { categories, search } = this.state;
    const filteredCategories = categories.filter((categories) =>
      categories.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                filteredCategories={filteredCategories}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </div>
    );
  }
}

export default App;
