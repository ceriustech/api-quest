import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Geocoding = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper geocoding">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Geocoding Page</h1>
      </section>
    </div>
  );
};

export default Geocoding;
