import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const Calendar = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper calendar">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Calendar Page</h1>
      </section>
    </div>
  );
};

export default Calendar;
