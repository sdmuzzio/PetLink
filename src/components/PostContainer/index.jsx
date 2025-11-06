import React from "react";
import * as classes from "./PostContainer.module.css";

export const PostContainer = ({
  postImage,
  title,
  description,
  published,
  location,
  locationImage,
  className,
}) => {
  return (
    <div className={`${classes.container} ${className || ""}`}>
      {/* IMAGEN PRINCIPAL */}
      <img
        className={classes.postImage}
        src={postImage}
        alt={title}
      />

      {/* TÍTULO */}
      <h3 className={classes.title}>{title}</h3>

      {/* DESCRIPCIÓN */}
      <p className={classes.description}>{description}</p>

      {/* FECHA */}
      <div className={classes.publishedDate}>{published}</div>

      {/* UBICACIÓN */}
      <div className={classes.locationContainer}>
        <img
          className={classes.locationImage}
          src={locationImage}
          alt="Ubicación"
        />
        <div className={classes.locationText}>{location}</div>
      </div>
    </div>
  );
};

export default PostContainer;