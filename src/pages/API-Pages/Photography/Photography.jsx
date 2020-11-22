import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Photography = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper photography">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Photography Page</h1>
      </section>
    </div>
  );
};

export default Photography;
