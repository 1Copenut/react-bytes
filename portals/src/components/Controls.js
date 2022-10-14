import React from "react";

const Controls = ({ handleIsShown }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleIsShown();
  };

  return (
    <div className="cd-container">
      <button onClick={handleClick} type="button" aria-controls="modal-dialog">
        Launch Modal
      </button>
    </div>
  );
};

export default Controls;
