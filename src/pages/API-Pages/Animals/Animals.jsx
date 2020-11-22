import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';

const Animals = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper animals">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Animals Page</h1>
      </section>
    </div>
  );
};

export default Animals;
