import React from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .result-box {
    border: 0.5px solid black;
    border-radius: 5px;
    max-width: 600px;
    height: auto;
    padding: 3rem;
    text-align: center;

    h3 {
      margin-bottom: 10px;
    }
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
      <div className="result-box">
        <h3>Here is what I found about: </h3>
        {searchPerformed && results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div>
            {results &&
              results.map((result) => (
                <div key={result.id}>
                  <p>{result.title}</p>
                  <br />
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
