import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai",
    "Wolf",
  ]);
  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "Breaking Bad"]);
  // };
  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GitExpertApp;
