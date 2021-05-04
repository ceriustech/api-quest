import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const TestAnalysis = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper test-analysis">
			<section className="category-content">
				<h1>Test Analysis Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default TestAnalysis;
