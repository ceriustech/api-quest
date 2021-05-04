import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const CloudStorageFileSharing = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper cloud-storage-file-sharing">
			<h1>Cloud Storage and File Sharing Page</h1>
			<section className="category-content">
				<SubCategoryList />
			</section>
		</div>
	);
};

export default CloudStorageFileSharing;
