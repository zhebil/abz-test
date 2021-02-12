import React from "react";
import { CSSTransition } from "react-transition-group";

export default function Tooltip({ open, text }) {
  return (
    <CSSTransition unmountOnExit in={open} timeout={400} classNames="tooltip">
      <div className="tooltip">
        <a href={`mailto:text`}>{text}</a>
      </div>
    </CSSTransition>
  );
}
