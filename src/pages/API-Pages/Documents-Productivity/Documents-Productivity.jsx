import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const DocumentsProductivity = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper documents-productivity">
			<section className="category-content">
				<h1>Documents and Productivity Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default DocumentsProductivity;
