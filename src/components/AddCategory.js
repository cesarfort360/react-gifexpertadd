import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    // Podremos acceder al value, id, name, etc...
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
      Hemos recibido "setCategories" pero no tenemos acceso a "categories"
      Podriamos pasarlo como argumento : export const AddCategory = ({ setCategories, categories }) => {
      Al hacerlo de esta forma nos ahorramos enviar otro argumento y como "setCategories" tiene un call back
      podemos añadirle lo que escribamos en el input
    */
    /* ".trim()" limpia espacios en blando delante y atrás
      
    inputValue != undefined &&  
    */
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* onChange devuelve un evento el cual contiene datos que podemos manejar */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/*
        - Sin los paréntesis pasamos la "referencia" a la función
        que se ejecutará.
        (e) => {
           console.log(e.target.value);
          };

          - Con los paréntesis ejecutamos la función.
          console.log(e.target.value);
    */}
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
