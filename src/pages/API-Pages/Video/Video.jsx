import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Video = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper video">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Video Page</h1>
      </section>
    </div>
  );
};

export default Video;
