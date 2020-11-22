import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const FoodDrink = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper food-drink">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Food and Drink Page</h1>
      </section>
    </div>
  );
};

export default FoodDrink;
