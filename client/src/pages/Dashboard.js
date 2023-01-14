import React from "react";
import styled from "styled-components";
import NavBar from "../components/generalComponents/NavBar";
import Display from "../components/Display";
import SearchBar from "../components/SearchBar";

const Dashboard = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  return (
    <div>
      <NavBar />
      <SearchBar input={input} setInput={setInput} search={search} clear={clear} />
      <Display
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
      />
    </div>
  );
};

export default Dashboard;
