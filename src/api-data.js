import axios from "axios";

export const APICategories = () => {
  return axios
    .get(`https://api.publicapis.org/categories`)
    .then((response) => response.data)
    .then((apiCategories) => {
      console.log(apiCategories);
      return apiCategories;
    })
    .catch((error) => {
      console.log(`Looks like there was a problem ${error}`); 
    })
};

export const subCategoryList = () => {
  return axios
    .get(`https://api.publicapis.org/entries?category=animals&https=true`)
    .then((response) => response.data)
    .then((subApiCategory) => {
      console.log(`Sub-Category: ${subApiCategory}`);
      return subApiCategory; 
    })
    .catch((error) => {
      console.log(`Looks like there was a problem ${error}`); 
    })
};

// const apiInfo = () => {
//   fetch(`https://api.publicapis.org/entries?category=animals&https=true`)
//   .then(response => response.json())
//   .then(apiInfo => console.log(apiInfo)); 
// }

