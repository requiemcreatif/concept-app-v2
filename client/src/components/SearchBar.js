import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  margin: 5rem auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  input {
    max-width: 35rem;
    height: auto;
    padding: 1rem;
    border: 0.5px solid black;
    border-radius: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 10rem;
    max-height: 4rem;
    border: 0.5px solid black;
    border-radius: 5px;
    background-color: #f5f5f5;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;

      transition: 0.2s ease-in-out;
    }
  }
`;

//console.log(DATABASE);

const SearchBar = ({ input, setInput, search }) => {
  return (
    <InputDiv>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => search(input)}>Search</button>

      {/* {input.trim() === "" && <p>Please input something to search for</p>} */}
    </InputDiv>
  );
};

export default SearchBar;
