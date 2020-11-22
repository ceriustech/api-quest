import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Social = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper social">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Social Page</h1>
      </section>
    </div>
  );
};

export default Social;
