import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const URLShorteners = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper url-shorteners">
			<section className="category-content">
				<h1>URL Shorteners Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default URLShorteners;
