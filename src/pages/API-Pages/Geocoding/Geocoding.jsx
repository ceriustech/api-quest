import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Geocoding = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper geocoding">
			<section className="category-content">
				<h1>Geocoding Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Geocoding;
