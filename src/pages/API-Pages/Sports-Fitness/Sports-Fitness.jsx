import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const SportsFitness = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper sports-fitness">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Sports and Fitness Page</h1>
      </section>
    </div>
  );
};

export default SportsFitness;
