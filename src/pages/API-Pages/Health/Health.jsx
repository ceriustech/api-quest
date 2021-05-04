import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Health = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper health">
			<section className="category-content">
				<h1>Health Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Health;
