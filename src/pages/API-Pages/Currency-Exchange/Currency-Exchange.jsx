import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const CurrencyExchange = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper currency-exchange">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Currency Exchange Page</h1>
      </section>
    </div>
  );
};

export default CurrencyExchange;
