import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Finance = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper finance">
			<h1>Finance Page</h1>
			<section className="category-content">
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Finance;
