import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Jobs = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper jobs">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Jobs Page</h1>
      </section>
    </div>
  );
};

export default Jobs;
