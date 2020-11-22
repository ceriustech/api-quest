import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const ArtDesign = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper art-design">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Art and Design Page</h1>
      </section>
    </div>
  );
};

export default ArtDesign;
