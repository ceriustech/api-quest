import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Tracking = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper tracking">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Tracking Page</h1>
      </section>
    </div>
  );
};

export default Tracking;
