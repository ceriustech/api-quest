import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Development = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper developmnent">
			<section className="category-content">
				<h1>Development Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Development;
