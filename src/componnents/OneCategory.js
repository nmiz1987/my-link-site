import Item from "./Item";
import { useEffect, useState } from "react";

const OneCategory = (items) => {
  return (
    <div className="oneCategory">
      <div className="category-title">{items["items"][0]}</div>
      <div className="items">
        {items["items"][1].map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OneCategory;
