import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Government = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper government">
			<section className="category-content">
				<h1>Government Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Government;
