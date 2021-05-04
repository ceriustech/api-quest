import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Business = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper business">
			<section className="category-content">
				<h1>Business Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Business;
