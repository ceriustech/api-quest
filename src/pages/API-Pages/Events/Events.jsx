import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Events = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper events">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Events Page</h1>
      </section>
    </div>
  );
};

export default Events;
