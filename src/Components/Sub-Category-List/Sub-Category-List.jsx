import React from 'react';

import SubCategoryListHeader from '../Sub-Category-List-Header/Sub-Category-List-Header';
import SubCategory from '../Sub-Category/Sub-Category';

import '../../Styles/Sub-Category-List/Sub-Category-List.scss';

const SubCategoryList = () => {
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
