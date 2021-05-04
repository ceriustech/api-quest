import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const ArtDesign = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper art-design">
			<section className="category-content">
				<h1>Art and Design Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default ArtDesign;
