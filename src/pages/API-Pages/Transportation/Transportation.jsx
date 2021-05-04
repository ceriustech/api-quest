import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Transportation = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper transportation">
			<section className="category-content">
				<h1>Transportation Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Transportation;
