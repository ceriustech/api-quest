import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Calendar = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper calendar">
			<section className="category-content">
				<h1>Calendar Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Calendar;
