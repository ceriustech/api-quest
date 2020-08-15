import React from "react";
import Card from "../Card/Card";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.categories.map((categories, index) => (
        <Card key={index} category={categories} />
      ))}
    </div>
  );
};

export default CardList;
