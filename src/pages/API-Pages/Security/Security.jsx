import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Security = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper security">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Security Page</h1>
      </section>
    </div>
  );
};

export default Security;
