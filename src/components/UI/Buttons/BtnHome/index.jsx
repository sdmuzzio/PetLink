import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import * as classes from "./style.module.css";

export const Home = ({ estado, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    estado: estado || "predeterminado",
  });

  return (
    <div
      className={`${classes.home} ${classes[state.estado]} ${className || ""}`}
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
        estado: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        estado: "predeterminado",
      };
  }

  return state;
}

Home.propTypes = {
  estado: PropTypes.oneOf(["on-click", "predeterminado", "hover"]),
};