import React from "react";

// export const GifGridItem = (props) => {
export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__lightSpeedInLeft">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
