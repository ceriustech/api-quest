import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const SportsFitness = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper sports-fitness">
			<section className="category-content">
				<h1>Sports and Fitness Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default SportsFitness;
