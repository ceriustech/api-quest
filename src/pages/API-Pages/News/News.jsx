import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const News = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper news">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>News Page</h1>
      </section>
    </div>
  );
};

export default News;
