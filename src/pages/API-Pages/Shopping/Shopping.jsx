import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Shopping = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper shopping">
			<section className="category-content">
				<h1>Shopping Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Shopping;
