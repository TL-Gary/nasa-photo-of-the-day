import React from "react";

const PhotoCard = (props) => {
  return (
    <div className="photo-card">
      <h1>{props.photo.title}</h1>
      <h2>{props.photo.date}</h2>
      <img src={props.photo.url} alt={props.photo.title} />
      <p>{props.photo.explanation}</p>
    </div>
  )
}

export default PhotoCard;
