import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';

const Shopping = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper shopping">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Shopping Page</h1>
      </section>
    </div>
  );
};

export default Shopping;
