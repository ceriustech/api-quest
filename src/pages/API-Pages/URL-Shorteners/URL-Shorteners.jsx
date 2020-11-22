import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const URLShorteners = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper url-shorteners">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>URL Shorteners Page</h1>
      </section>
    </div>
  );
};

export default URLShorteners;
