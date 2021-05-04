import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const DataValidation = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper data-validation">
			<section className="category-content">
				<h1>Data Validation Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default DataValidation;
