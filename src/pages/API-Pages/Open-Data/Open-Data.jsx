import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const OpenData = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper open-data">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Open Data Page</h1>
      </section>
    </div>
  );
};

export default OpenData;
