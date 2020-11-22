import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const TestAnalysis = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper test-analysis">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Test Analysis Page</h1>
      </section>
    </div>
  );
};

export default TestAnalysis;
