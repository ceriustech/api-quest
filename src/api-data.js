import axios from "axios";

export const categories2 = () => {
  axios
    .get(`https://api.publicapis.org/categories`)
    .then((response) => response.data)
    .then((apiCategories) => {
      console.log(apiCategories);
      return apiCategories;
    });
};

export const subCategoryList = () => {
  axios
    .get(`https://api.publicapis.org/entries?category=animals&https=true`)
    .then((response) => console.log(`SubCatebory Data: ${response.data}`));
};
