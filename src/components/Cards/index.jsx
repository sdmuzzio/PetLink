import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./Cards.module.css";

// IMÁGENES → RUTAS ROTAS (broken image)
const defaultPostImage = "/posts/404-post.png";
const locationIcon = "/icons/location.svg"; // ← MANTENER si existe, o rota

export const Cards = ({ 
  className = "", 
  id, 
  title = "Título publicación", 
  description = "Lorem ipsum dolor sit amet consectetur...", 
  location = "Ubicación", 
  published = "Publicado hace: 3m",
  image = defaultPostImage
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div 
      className={`${classes.container} ${className}`} 
      onClick={handleClick}
    >
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      <img className={classes.postImage} alt="Post" src={image} />
      
      <div className={classes.footer}>
        <div className={classes.publishedDate}>{published}</div>
        <div className={classes.locationContainer}>
          <img className={classes.locationIcon} alt="Location" src={locationIcon} />
          <div className={classes.locationText}>{location}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;