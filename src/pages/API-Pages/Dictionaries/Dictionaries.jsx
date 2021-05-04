import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Dictionaries = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper dictionaries">
			<section className="category-content">
				<h1>Dictionaries Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default Dictionaries;
