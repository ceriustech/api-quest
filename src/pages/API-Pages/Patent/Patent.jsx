import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Patent = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper patent">
			<section className="category-content">
				<h1>Patent Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Patent;
