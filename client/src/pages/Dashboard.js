import { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/generalComponents/NavBar";
import Display from "../components/Display";
import SearchBar from "../components/SearchBar";

const Dashboard = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  const fetchData = async () => {
    try {
      //const response = await fetch("/data.json");
      const response = await fetch("/api/v1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
