// Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Home.Styles.css";
import SearchField from "../../Components/Search-Field/Search-Field";
import CardList from "../../Components/Card-List/Card-List";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const categoryList = useEffect(() => {
    axios
      .get(`https://api.publicapis.org/categories`)
      .then((response) => response.data)
      .then((apiCategoires) => {
        setCategories(apiCategoires);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.publicapis.org/entries?category=animals&https=true")
      .then((response) => console.log(response.data));
  }, []);

  const handleInputSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="main-content_wrapper">
      <section className="main-content">
        <h1>Welcome to API Quest</h1>
        <SearchField handleChange={handleInputSearchChange} />
        <CardList
          categories={categories.filter(
            (category) =>
              category.toUpperCase().indexOf(search.toUpperCase()) >= 0
          )}
        />
      </section>
    </div>
  );
};

export default HomePage;
