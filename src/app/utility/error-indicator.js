import React from "react";
export default function ErrorIndicator() {
  return (
    <div className="error">
      <div className="container">
        <h1 className="title error__title">Error!</h1>
        <p className="error__message">Something went wrong. Try later</p>
      </div>
    </div>
  );
}
