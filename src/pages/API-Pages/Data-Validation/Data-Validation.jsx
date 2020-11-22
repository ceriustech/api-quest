import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const DataValidation = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper data-validation">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Data Validation Page</h1>
      </section>
    </div>
  );
};

export default DataValidation;
