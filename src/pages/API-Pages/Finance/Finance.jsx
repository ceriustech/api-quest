import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Finance = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper finance">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Finance Page</h1>
      </section>
    </div>
  );
};

export default Finance;
