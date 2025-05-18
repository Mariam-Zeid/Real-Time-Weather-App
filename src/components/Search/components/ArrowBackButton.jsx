import React from "react";

export default function ArrowBackButton({ handleToggleView }) {
  return (
    <button onClick={handleToggleView} className="arrow-back-btn">
      <span className="m-icon">arrow_back</span>
    </button>
  );
}
