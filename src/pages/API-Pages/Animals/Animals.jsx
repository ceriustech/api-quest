import React, { useState, useEffect } from 'react';

import { subCategoryList } from "../../../api-data";


import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const Animals = (props) => {
  const [subCategory, setSubCategory] = useState ([]); 

  const path = window.location.pathname.replace('/', ''); 

  const subCategories = useEffect(() => {
      
      subCategoryList(path).then((data) => 
      {
          setSubCategory(data)
          console.log(data);
      
      }); 
  }, []);


  console.log(props);
  return (
    <div className="main-content_wrapper animals">
      <section className="category-content">
        <h1>Animals Page</h1>
        <SubCategoryList urlPath={'path'} />
      </section>
    </div>
  );
};

export default Animals;
