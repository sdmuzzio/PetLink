import React from "react";
import { useNavigate } from "react-router-dom";
import * as classes from "./CardMainpage.module.css";
import PropTypes from "prop-types";

export const CardMainpage = ({ propuesta, oferta, className }) => {
  const navigate = useNavigate();

  const handleClick = (type, postId) => {
    if (postId) {
      navigate(`/${type}/${postId}`);
    }
  };

  return (
    <div className={`${classes.container} ${className || ""}`}>
      {/* CARD PROPUESTA */}
      <div
        className={classes.card}
        onClick={() => handleClick("propuesta", propuesta.postId)}
        style={{ cursor: propuesta.postId ? "pointer" : "default" }}
      >
        <img
          className={classes.image}
          src={propuesta.image}
          alt={propuesta.text}
        />
        <div className={classes.content}>
          <div className={classes.title}>{propuesta.text}</div>
          <p className={classes.description}>{propuesta.text1}</p>
          <div className={classes.footer}>
            <div className={classes.publishedTime}>{propuesta.text3}</div>
            <div className={classes.locationContainer}>
              <div className={classes.locationText}>{propuesta.text2}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD OFERTA */}
      <div
        className={classes.card}
        onClick={() => handleClick("oferta", oferta.postId)}
        style={{ cursor: oferta.postId ? "pointer" : "default" }}
      >
        <img className={classes.image} src={oferta.image} alt={oferta.text} />
        <div className={classes.content}>
          <div className={classes.title}>{oferta.text}</div>
          <p className={classes.description}>{oferta.text1}</p>
          <div className={classes.footer}>
            <div className={classes.publishedTime}>{oferta.text3}</div>
            <div className={classes.locationContainer}>
              <div className={classes.locationText}>{oferta.text2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardMainpage.propTypes = {
  propuesta: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
  }).isRequired,
  oferta: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default CardMainpage;