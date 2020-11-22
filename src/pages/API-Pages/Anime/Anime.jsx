import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Anime = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper anime">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Anime Page</h1>
      </section>
    </div>
  );
};

export default Anime;
