import React from "react";

import "./Home.Styles.css";
import SearchField from "../../Components/Search-Field/Search-Field";
import CardList from "../../Components/Card-List/Card-List";

const HomePage = (props) => (
  <div className="main-content_wrapper">
    <section className="main-content">
      <h1>Welcome to API Quest</h1>
      <SearchField placeholder="search api's here..." />
      <CardList categories={props.filteredCategories} />
    </section>
  </div>
);

export default HomePage;
