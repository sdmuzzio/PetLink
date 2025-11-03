import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import * as classes from "./style.module.css";

export const BackArrow = ({ propiedad1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    propiedad1: propiedad1 || "predeterminado",
  });

  return (
    <div
      className={`${classes.backArrow} ${classes[state.propiedad1]} ${className || ""}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    />
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        propiedad1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        propiedad1: "predeterminado",
      };
  }

  return state;
}

BackArrow.propTypes = {
  propiedad1: PropTypes.oneOf(["on-click", "predeterminado", "hover"]),
};