import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Anime = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper anime">
			<section className="category-content">
				<h1>Anime Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Anime;
