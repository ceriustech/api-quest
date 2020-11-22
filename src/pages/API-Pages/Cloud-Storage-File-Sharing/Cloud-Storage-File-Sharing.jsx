import React from "react";

import SubCategoryListHeader from '../../../Components/Sub-Category-List-Header/Sub-Category-List-Header';


const CloudStorageFileSharing = (props) => {
  console.log(props);
  return (
    <div className="main-content_wrapper cloud-storage-file-sharing">
      <section className="category-content">
        <SubCategoryListHeader />
        <h1>Cloud Storage and File Sharing Page</h1>
      </section>
    </div>
  );
};

export default CloudStorageFileSharing;
