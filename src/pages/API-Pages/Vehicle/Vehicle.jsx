import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Vehicle = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper vehicle">
			<section className="category-content">
				<h1>Vehicle Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Vehicle;
