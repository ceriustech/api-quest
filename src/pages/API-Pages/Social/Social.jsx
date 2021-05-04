import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Social = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper social">
			<section className="category-content">
				<h1>Social Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Social;
