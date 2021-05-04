import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const TestData = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper test-data">
			<section className="category-content">
				<h1>Test Data Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default TestData;
