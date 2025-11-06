import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./CardMainpage.module.css";
import PropTypes from "prop-types";

export const CardMainpage = ({
  image,
  text,       // Titulo
  text1,      // Descripción
  text2,      // Ubicación
  text3,      // Tiempo publicado
  postId,     // ID para navegar al detalle
  className,
  divClassName,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (postId) {
      navigate(`/inicio/${postId}`);
    }
  };

  return (
    <div
      className={`${classes.card} ${className || ""}`}
      onClick={handleClick}
      style={{ cursor: postId ? "pointer" : "default" }}
    >
      <div className={`${classes.title} ${divClassName || ""}`}>{text}</div>

      <p className={classes.description}>{text1}</p>

      <div className={classes.locationContainer}>
        <img className={classes.locationImage} alt="Ubicación" src={image} />
        <div className={classes.locationText}>{text2}</div>
      </div>

      <div className={classes.publishedTime}>{text3}</div>
    </div>
  );
};

CardMainpage.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  postId: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
};