import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Patent = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper patent">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Patent Page</h1>
      </section>
    </div>
  );
};

export default Patent;
