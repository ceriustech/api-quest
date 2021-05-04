import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const MachineLearning = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper machine-learning">
			<section className="category-content">
				<h1>Machine Learning Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default MachineLearning;
