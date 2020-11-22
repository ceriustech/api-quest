import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Weather = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper weather">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Weather Page</h1>
      </section>
    </div>
  );
};

export default Weather;
