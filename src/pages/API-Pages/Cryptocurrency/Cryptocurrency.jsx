import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Cryptocurrency = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper cryptocurrency">
			<section className="category-content">
				<h1>Cryptocurrency Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Cryptocurrency;
