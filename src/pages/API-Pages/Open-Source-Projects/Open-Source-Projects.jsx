import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const OpenSourceProjects = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper open-source-projects">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Open Source Projects Page</h1>
      </section>
    </div>
  );
};

export default OpenSourceProjects;
