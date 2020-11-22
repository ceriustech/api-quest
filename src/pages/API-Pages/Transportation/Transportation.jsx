import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Transportation = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper transportation">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Transportation Page</h1>
      </section>
    </div>
  );
};

export default Transportation;
