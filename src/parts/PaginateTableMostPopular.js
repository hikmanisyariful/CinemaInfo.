import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TableMostPopular from "./TableMostPopular";

export default function PaginateTableMostPopular({
  itemsPerPage,
  items,
  isUpdated
}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   console.log("UPDATE ITEMS");
  //   if (currentItems !== null) {
  //     if (currentItems[0].id !== items[0].id) {
  //       setCurrentItems(items.slice(0, itemsPerPage));
  //     }
  //   }
  // }, [isUpdated]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, isUpdated]);

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
      <TableMostPopular currentItems={currentItems} />

      <ReactPaginate
        // containerClassName="pagination"
        className="pagination pagination-sm justify-content-center mt-5"
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
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
