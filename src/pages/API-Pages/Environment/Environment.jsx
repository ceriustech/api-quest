import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Environment = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper environment">
			<section className="category-content">
				<h1>Environment Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Environment;
