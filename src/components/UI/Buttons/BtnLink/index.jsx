import PropTypes from "prop-types";
import React, { useReducer } from "react";
import * as classes from "./BtnLink.module.css";

export const BtnLink = ({ propiedad1 = "predeterminado", className, onClick, text = "Enlace" }) => {
  const [state, dispatch] = useReducer(reducer, {
    propiedad1,
  });

  return (
    <div
      className={`${classes.btnLink} ${classes[state.propiedad1]} ${className || ""}`}
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className={classes.label}>{text}</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return { ...state, propiedad1: "hover" };
    case "mouse_leave":
      return { ...state, propiedad1: "predeterminado" };
    default:
      return state;
  }
}

BtnLink.propTypes = {
  propiedad1: PropTypes.oneOf(["on-click", "predeterminado", "hover"]),
  onClick: PropTypes.func,
  text: PropTypes.string,
};