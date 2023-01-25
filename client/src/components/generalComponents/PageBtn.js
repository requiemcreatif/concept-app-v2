import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const PageBtnWrapper = styled.div`
  margin: 5rem auto;
`;

const PageBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .page {
    background-color: #fff;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .btn-pages {
    display: flex;
    gap: 1rem;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const PageBtn = () => {
  //const [page, setPage] = useState(1);
  //const [pageCount, setPageCount] = useState(0);
  const { numOfPages, changePage, page } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  console.log(pages);

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
    console.log("next page");
  };

  const prevPage = () => {
    let oldPage = page - 1;
    if (oldPage < 1) {
      oldPage = numOfPages;
    }
    changePage(oldPage);
    console.log("prev page");
  };

  return (
    <PageBtnWrapper>
      <PageBtnContainer>
        <button className="arrow" onClick={prevPage}>
          <FaAngleLeft />
        </button>
        <div className="btn-pages">
          {pages.map((pageNum) => {
            return (
              <button
                className="page"
                type="button"
                key={pageNum}
                onClick={() => changePage(pageNum)}>
                {pageNum}
              </button>
            );
          })}
        </div>
        <button className="arrow" onClick={nextPage}>
          <FaAngleRight />
        </button>
      </PageBtnContainer>
    </PageBtnWrapper>
  );
};

export default PageBtn;
