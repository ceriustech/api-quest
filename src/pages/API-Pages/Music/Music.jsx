import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Music = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper music">
			<section className="category-content">
				<h1>Music Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Music;
