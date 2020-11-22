import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Dictionaries = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper dictionaries">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Dictionaries Page</h1>
      </section>
    </div>
  );
};

export default Dictionaries;
