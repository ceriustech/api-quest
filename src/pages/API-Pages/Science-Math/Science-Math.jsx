import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const ScienceMath = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper science-math">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Science and Math Page</h1>
      </section>
    </div>
  );
};

export default ScienceMath;
