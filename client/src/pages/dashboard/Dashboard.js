//import { motion } from "framer-motion";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SearchInputField from "../../components/SearchInputField";
import TopFilter from "../../components/generalComponents/TopFilter";
import GeneralCode from "./GeneralCode";
import PageBtn from "../../components/generalComponents/PageBtn";
import styled from "styled-components";
import "./css/dashboard.css";

const Dashboard = ({ toggleTheme, isDarkTheme }) => {
  const { getAllCodes, codes, totalCodes, isLoading, numOfPages, page } = useAppContext();

  /*Search Input Field */
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllCodes(selectedLanguage);
  }, [selectedLanguage, page]);

  const handleFilterChange = (language) => {
    setSelectedLanguage(language);
    getAllCodes(language);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const clear = () => {
    setSearchValue("");
    resetTranscript();
  };

  /* Voice Commands */
  const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startHandle = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const stopHandle = () => {
    SpeechRecognition.stopListening();
  };

  const start = () => {
    startListening();
    console.log("start");
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  const filteredCodes = codes.filter((code) => {
    const searchFields = [code.title, code.description, code.language, code.code];
    return (
      (code.language === selectedLanguage || selectedLanguage === "All") &&
      searchFields.some((field) => field.toLowerCase().includes(searchValue.toLowerCase()))
    );
  });

  return (
    <div className="dashboard">
      <section className="topSearch top ">
        <SearchInputField
          clear={clear}
          className="topSearch search"
          handleSearch={handleSearch}
          startHandle={startHandle}
          start={start}
          stopHandle={stopHandle}
          listening={listening}
          transcript={transcript}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <TopFilter
          className="filter"
          selectedLanguage={selectedLanguage}
          handleFilterChange={handleFilterChange}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
      </section>

      {/* <div className="counter">{numOfPages > 1 && <PageBtn />}</div> */}
      <h3 className="count">
        {filteredCodes.length} code{filteredCodes.length > 1 && "s"} found
      </h3>
      <div className="code-display">
        {filteredCodes.map((code, index) => {
          return (
            <GeneralCode
              className="card"
              key={code._id}
              {...code}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
