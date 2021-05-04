import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const News = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper news">
			<section className="category-content">
				<h1>News Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default News;
