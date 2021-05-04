import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Security = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper security">
			<section className="category-content">
				<h1>Security Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Security;
