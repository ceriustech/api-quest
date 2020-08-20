import React from "react";
import Card from "../Card/Card";

import { categoryinfo } from "../../const.js";

import "./Card-List.Styles.css";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.categories.map((category, index) => {
        if (!categoryinfo[category]) {
          return null;
        }

        const { icon, summaryText, backgroundColor, iconColor } = categoryinfo[
          category
        ];
        return (
          <Card
            key={index}
            category={category}
            icon={icon}
            summaryText={summaryText}
            backgroundColor={backgroundColor}
            iconColor={iconColor}
          />
        );
      })}
    </div>
  );
};

export default CardList;
