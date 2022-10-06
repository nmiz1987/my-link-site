import { useEffect, useState } from "react";

const OneLink = ({ item }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="oneItem">
      <a href={item.link} target="_blank">
        <img src={item.imgSrc} alt={item.name}></img>
        <div>
          {capitalizeFirstLetter(item.name)}{" "}
          {item.recommended && <span title="recommended!">💯</span>}
        </div>
        <div>{capitalizeFirstLetter(item.description)}</div>
      </a>
    </div>
  );
};

export default OneLink;
