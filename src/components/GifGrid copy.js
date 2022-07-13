import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  // Si la categoría cambia, queremos que se vuelva a ejecutar este efecto
  // }, [category]);
  useEffect(() => {
    // Cuando tenemos una función que devuelve su primer y único argumento
    // a la función de dentro, podemos relizarlo de esta manera:
    getGifs(category).then(setImages);
    // ---------- Ambas opciones hacen lo mismo ----------
    // "imgs" sería el "return gifs;" de "getGifs.js"
    // getGifs(category).then((imgs) => {
    //   setImages(imgs);
    // });
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          // -Lo muestro directamente
          // images.map(({ id, title, url }) => {
          //   return <li key={id}>{title}</li>;
          // -Lo muestro con un component
          //
          // 1.
          images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))
          // 2.
          // images.map((img) => (
          //   <GifGridItem key={img.id} img={img} />
          // ))
        }
      </div>
    </>
  );
};
