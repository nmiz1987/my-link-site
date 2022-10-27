import { useState, useEffect } from "react";
import OneCategory from "./OneCategory";

const Details = () => {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setStatus("loading");

    const res = await fetch(
      "https://orange-red-jaguar-cuff.cyclic.app/my-links/all"
    );
    const data = await res.json();

    // create categories for the divition
    var categories = {};
    data.forEach((el) => {
      categories[el.category] = [];
    });

    data.forEach((el) => {
      var category = el.category;
      // console.log(categories[category]);
      categories[category].push(el);
    });
    setList(Object.entries(categories));
    setStatus("loaded");
  }

  return (
    <div className="allLinks">
      {status === "unloaded" ? (
        <h1>Something went worng...</h1>
      ) : status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        list.map((items, index) => <OneCategory key={index} items={items} />)
      )}
    </div>
  );
};

export default Details;
