import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const GamesComics = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper games-comics">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Games and Comics Page</h1>
      </section>
    </div>
  );
};

export default GamesComics;
