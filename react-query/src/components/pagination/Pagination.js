import React, { useState } from "react";

const Pagination = (props) => {
  const [page, setPage] = useState(1);

  return (
    <nav class="cd-nav__pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </nav>
  );
};

export default Pagination;
