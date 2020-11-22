import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const TestData = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper test-data">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Test Data Page</h1>
      </section>
    </div>
  );
};

export default TestData;
