import React, { useState, useEffect } from "react";

import { APICategories } from "../../api-data";

import "./Categories.Styles.css";
import SearchField from "../../Components/Search-Field/Search-Field";
import CardList from "../../Components/Card-List/Card-List";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const categoryList = useEffect(() => {
    APICategories().then((data) => setCategories(data));
  }, []);
  // console.log(`This Works: ${APICategories()}`);

  const handleInputSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="main-content_wrapper">
      <section className="main-content">
        <h1 className="main-content_h1">Search For API's</h1>
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

export default CategoriesPage;
