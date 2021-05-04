import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Events = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper events">
			<section className="category-content">
				<h1>Events Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Events;
