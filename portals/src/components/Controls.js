import React from "react";

const Controls = ({ handleIsShown }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleIsShown();
  };

  return (
    <div className="cd-container">
      <button
        aria-label="Learn more about Ubuntu"
        className="cd-button--modal"
        onClick={handleClick}
        type="button"
      >
        Learn more
      </button>
    </div>
  );
};

export default Controls;
