import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Weather = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper weather">
			<section className="category-content">
				<h1>Weather Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Weather;
