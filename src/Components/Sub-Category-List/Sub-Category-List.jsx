import React from 'react';

import SubCategoryListHeader from '../Sub-Category-List-Header/Sub-Category-List-Header';
import SubCategory from '../Sub-Category/Sub-Category';
import MobileSubCategory from '../Sub-Category/Mobile-Sub-Category';

import '../../Styles/Sub-Category-List/Sub-Category-List.scss';
import '../../Styles/Sub-Category-List/Mobile-Sub-Category-List.scss';

const SubCategoryList = () => {
	return (
		<>
			<div className="sub-category-list-container">
				<SubCategoryListHeader />
				<SubCategory />
				<SubCategory />
				<SubCategory />
				<SubCategory />
				<SubCategory />
			</div>
			<div className="mobile-sub-category-list-container">
				<MobileSubCategory />
				<MobileSubCategory />
				<MobileSubCategory />
			</div>
		</>
	);
};

export default SubCategoryList;
