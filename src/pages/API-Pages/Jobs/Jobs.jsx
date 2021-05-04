import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Jobs = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper jobs">
			<section className="category-content">
				<h1>Jobs Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Jobs;
