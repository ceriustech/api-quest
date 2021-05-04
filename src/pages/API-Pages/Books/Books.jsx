import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Books = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper books">
			<h1>Books Page</h1>
			<section className="category-content">
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Books;
