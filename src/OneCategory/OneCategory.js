import "./OneCategory.css";
import { useEffect, useState } from "react";

const OneLink = ({ item }) => {
  const { category, name, description, link, recommended, imgSrc } = item;
  console.log(item);

  return (
    <div className="one-item">
      <span>{category}</span>
      <span>{name}</span>
      <span>{description}</span>
      <span>{link}</span>
      <span>{recommended}</span>
      <img src={imgSrc} alt={name} style={{ height: "40px" }}></img>
    </div>
  );
};

export default OneLink;
