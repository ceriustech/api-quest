import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Photography = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper photography">
			<section className="category-content">
				<h1>Photography Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Photography;
