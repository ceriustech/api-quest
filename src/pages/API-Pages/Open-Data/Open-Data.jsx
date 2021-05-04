import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const OpenData = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper open-data">
			<section className="category-content">
				<h1>Open Data Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default OpenData;
