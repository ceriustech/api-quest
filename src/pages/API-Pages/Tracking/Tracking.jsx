import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Tracking = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper tracking">
			<section className="category-content">
				<h1>Tracking Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Tracking;
