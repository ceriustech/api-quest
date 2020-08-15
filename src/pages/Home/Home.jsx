import React from "react";

import "./Home.Styles.css";
import CardList from "../../Components/Card-List/Card-List";
const HomePage = (props) => (
  <div className="main-content_wrapper">
    <section className="main-content">
      <h1>Welcome to API Quest</h1>
      <input
        type="search"
        placeholder="search api's here..."
        onChange={props.handleChange}
      />
      <CardList categories={props.filteredCategories} />
    </section>
  </div>
);

export default HomePage;
