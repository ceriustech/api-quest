import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Personality = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper personality">
			<section className="category-content">
				<h1>Personality Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Personality;
