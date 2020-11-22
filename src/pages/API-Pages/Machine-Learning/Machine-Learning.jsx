import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const MachineLearning = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper machine-learning">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Machine Learning Page</h1>
      </section>
    </div>
  );
};

export default MachineLearning;
