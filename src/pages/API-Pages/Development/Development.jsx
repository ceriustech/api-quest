import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Development = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper developmnent">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Development Page</h1>
      </section>
    </div>
  );
};

export default Development;
