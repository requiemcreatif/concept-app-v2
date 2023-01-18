import React from "react";
import styled from "styled-components";
import "../App.css";

const InputDiv = styled.div`
  margin: 5rem auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  input {
    width: 30rem;
    height: auto;
    padding: 1rem;
    //border: 0.5px solid black;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 10rem;
    max-height: 4rem;
    //border: 0.5px solid black;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
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
    <div>
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm" placeholder="What are you looking for?" />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

{
  /* // <InputDiv>
//   <input
//     type="text"
//     placeholder="Search"
//     value={input}
//     onChange={(event) => setInput(event.target.value)}
//   />
//   <button onClick={() => search(input)}>Search</button>
// </InputDiv> */
}
