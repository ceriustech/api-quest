import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Government = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper government">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Government Page</h1>
      </section>
    </div>
  );
};

export default Government;
