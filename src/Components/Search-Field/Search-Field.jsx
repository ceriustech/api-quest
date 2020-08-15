// Search-Field.jsx
import React from "react";

import "./Search-Field.Styles.css";

const SearchField = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search api's here..."
      onChange={props.handleChange}
    />
  );
};

export default SearchField;
