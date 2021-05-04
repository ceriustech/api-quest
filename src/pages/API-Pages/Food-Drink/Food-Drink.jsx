import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const FoodDrink = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper food-drink">
			<section className="category-content">
				<h1>Food and Drink Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default FoodDrink;
