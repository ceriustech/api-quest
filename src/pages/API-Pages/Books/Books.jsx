import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Books = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper books">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Books Page</h1>
      </section>
    </div>
  );
};

export default Books;
