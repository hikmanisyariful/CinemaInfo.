import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TableContentCard from "./TableContentCard";

export default function PaginatedMovies({ itemsPerPage, items }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    // Window back to up
    window.scrollTo(0, 180);
    const overflowTBody = document.querySelector("#overflowTBody");
    overflowTBody.scrollTop = 0;
  };

  return (
    <div className="row mt-5">
      <TableContentCard
        currentItems={currentItems}
        // refScrollTop={refScrollTop}
      />
      <ReactPaginate
        // containerClassName="pagination"
        className="pagination justify-content-center"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName=""
        disabledClassName="disabled"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

      {/* <MoviesSearch currentItems={currentItems} /> */}
    </div>
  );
}
