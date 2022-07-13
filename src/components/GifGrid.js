import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // Reenombramos "data" con el nombre  "images"
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__rubberBand">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
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
