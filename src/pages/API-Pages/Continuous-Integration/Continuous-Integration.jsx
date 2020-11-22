import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const ContinuousIntegration = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper continuous-integration">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Continuous Integration Page</h1>
      </section>
    </div>
  );
};

export default ContinuousIntegration;
