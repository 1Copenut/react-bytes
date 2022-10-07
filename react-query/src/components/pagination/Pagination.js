import React from "react";

const Pagination = (props) => {
  const { handlePageNumber, pageNumber } = props;

  const decreasePageNumber = () => {
    handlePageNumber(pageNumber - 1);
  };

  const increasePageNumber = () => {
    handlePageNumber(pageNumber + 1);
  };

  return (
    <nav className="cd-nav__pagination">
      <button onClick={decreasePageNumber} disabled={pageNumber === 1}>
        Previous
      </button>
      <button onClick={increasePageNumber}>Next</button>
    </nav>
  );
};

export default Pagination;
