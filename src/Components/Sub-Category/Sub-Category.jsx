import React from "react";

import { Link } from "react-router-dom";


import "./Sub-Category.Styles.css";

const SubCategory = (props) => {


  return (
      <section className="sub-category-container">
          <div className="sub-category-info">
              <p className="sub-category-info-text">API Name</p>
              <p className="sub-category-info-text">Some Description</p>
              <p className="sub-category-info-text">Yes</p>
              <p className="sub-category-info-text">Yes</p>
              <p className="sub-category-info-text">Yes</p>
              <p className="sub-category-info-text">www.example.com</p>
          </div>
      </section>
  )
}

export default SubCategory; 
