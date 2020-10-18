import axios from "axios";

export const APICategories = () => {
  return axios
    .get(`https://api.publicapis.org/categories`)
    .then((response) => response.data)
    .then((apiCategories) => {
      // console.log(apiCategories);
      return apiCategories;
    });
};

export const subCategoryList = () => {
  return axios
    .get(`https://api.publicapis.org/entries?category=animals&https=true`)
    .then((response) => console.log(`SubCatebory Data: ${response.data}`));
};
