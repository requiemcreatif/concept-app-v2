import NavBar from "../components/generalComponents/NavBar";
import Display from "../components/Display";
import VoiceRecognitionSearch from "../components/VoiceRecognitionSearch";
import styled from "styled-components";

const Dashboard = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  return (
    <div>
      <NavBar />
      <VoiceRecognitionSearch input={input} setInput={setInput} search={search} />
      {/* <SearchBar input={input} setInput={setInput} search={search} clear={clear} /> */}
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
