import React from 'react';

import SubCategoryListHeader from '../Sub-Category-List-Header/Sub-Category-List-Header';
import SubCategory from '../Sub-Category/Sub-Category';

import './Sub-Category-List.Styles.css';

const SubCategoryList = (props) => {
	return (
		<div className="sub-category-list-container">
			<SubCategoryListHeader />
			<SubCategory />
			<SubCategory />
			<SubCategory />
			<SubCategory />
			<SubCategory />
		</div>
	);
};

export default SubCategoryList;
