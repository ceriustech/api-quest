import React from "react";
import { Card } from "./Card.jsx";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.api.map((api) => (
        <Card key={api.id} api={api} />
      ))}
    </div>
  );
};
