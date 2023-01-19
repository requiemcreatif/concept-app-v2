import React from "react";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";

const SearchDiv = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .result-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    margin: 20px auto;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .result-wrapper.show {
    opacity: 1;
  }

  h3 {
    margin-bottom: 10px;
    font-weight: 400;
  }

  .result-box {
    //border: 0.5px solid black;
    color: #00afb9;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 10px;
    width: 375px;
    height: auto;
    padding: 3rem;
    text-align: center;
    margin-bottom: 20px;

    h3 {
      padding: 2rem;
      color: #1e6091;
      text-align: center;
    }

    .copyIcon {
      //position: absolute;
      display: flex;
      justify-content: flex-end;
      padding: 0 1rem;
      cursor: pointer;
    }
  }

  .clear {
    background-color: #297ae8;
    color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 20px auto;
    width: 100px;
    cursor: pointer;
  }

  .here {
    text-align: center;
    padding: 2rem;
  }
`;

const Display = ({ results, searchPerformed, clear, setInput, input }) => {
  //console.log(setInput);
  return (
    <SearchDiv>
      <div>
        {searchPerformed && results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <>
            {results.length > 0 ? <h3 className="here">Here is what I found about: </h3> : null}
            <div className={`result-wrapper ${searchPerformed ? "show" : ""}`}>
              {results &&
                results.map((result) => (
                  <div className="result-box" key={result.id}>
                    <div className="copyIcon">
                      <MdContentCopy />
                    </div>
                    <p>{result.language}</p>
                    <h3>{result.title}</h3>
                    <p>{result.description}</p>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
      <button
        className="clear"
        onClick={() => {
          clear();
          setInput("");
        }}>
        Clear
      </button>
    </SearchDiv>
  );
};

export default Display;
