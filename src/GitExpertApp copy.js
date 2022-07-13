import React, { useState } from "react";

const GitExpertApp = () => {
  //   const categories = ["One Punch", "Samurai", "Wolf"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai",
    "Wolf",
  ]);
  const handleAdd = () => {
    //'setCategories'([...categories, "Breaking Bad"]);
    // 'setCategories' tiene un callback
    // "(cats)" su primer argumento es el valor del estado anterior
    //  y devuelve el nuevo estado "=> [...cats, "Breaking Bad"]"
    setCategories((cats) => [...cats, "Breaking Bad"]);
  };
  return (
    <>
      <h2>GitExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => {
          // categories.map((category, indice) => {
          // Los map devuelven el valor y su índice, este indice es
          // volátil y pueden ocurrir cambios, por lo que
          // es más recomendado utulizar el valor como key
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GitExpertApp;
