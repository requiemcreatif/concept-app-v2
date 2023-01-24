import React from "react";
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
  const { numOfPages, changePage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  console.log(pages);

  const nextPage = () => {
    console.log("next page");
  };

  const prevPage = () => {
    console.log("prev page");
  };

  return (
    <PageBtnWrapper>
      <PageBtnContainer>
        <button className="arrow" onClick={prevPage}>
          <FaAngleLeft />
        </button>
        <div>
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
