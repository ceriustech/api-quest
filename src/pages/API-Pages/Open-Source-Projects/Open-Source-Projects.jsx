import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const OpenSourceProjects = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper open-source-projects">
			<section className="category-content">
				<h1>Open Source Projects Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default OpenSourceProjects;
