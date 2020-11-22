import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Health = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper health">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Health Page</h1>
      </section>
    </div>
  );
};

export default Health;
