import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Cryptocurrency = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper cryptocurrency">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Cryptocurrency Page</h1>
      </section>
    </div>
  );
};

export default Cryptocurrency;
