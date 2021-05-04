import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const ScienceMath = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper science-math">
			<section className="category-content">
				<h1>Science and Math Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default ScienceMath;
