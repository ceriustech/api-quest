import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Personality = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper personality">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Personality Page</h1>
      </section>
    </div>
  );
};

export default Personality;
