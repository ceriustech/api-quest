import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Video = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper video">
			<section className="category-content">
				<h1>Video Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Video;
