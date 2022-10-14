import React from "react";

const Controls = ({ handleIsShown, buttonRef }) => {
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
        ref={buttonRef}
        type="button"
      >
        Learn more
      </button>
    </div>
  );
};

export default Controls;
