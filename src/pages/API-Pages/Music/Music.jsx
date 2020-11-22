import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Music = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper music">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Music Page</h1>
      </section>
    </div>
  );
};

export default Music;
