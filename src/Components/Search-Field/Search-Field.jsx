import React from "react";

import "./Search-Field.Styles.css";

const SearchField = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};

export default SearchField;
