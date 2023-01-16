import React from "react";
import styled from "styled-components";

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
  }

  h3 {
    margin-bottom: 10px;
    font-weight: 400;
  }

  .result-box {
    //border: 0.5px solid black;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 5px;
    width: 375px;
    height: auto;
    padding: 3rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .clear {
    padding: 10px;
    margin: 20px auto;
    width: 100px;
    cursor: pointer;
  }
`;

const Display = ({ results, searchPerformed, clear }) => {
  return (
    <SearchDiv>
      <h3>Here is what I found about: </h3>
      <div>
        {searchPerformed && results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className="result-wrapper">
            {results &&
              results.map((result) => (
                <div className="result-box" key={result.id}>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
      <button className="clear" onClick={clear}>
        Clear
      </button>
    </SearchDiv>
  );
};

export default Display;
