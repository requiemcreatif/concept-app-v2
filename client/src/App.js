import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddCodes, AllCodes, Profile, Layout, SuccessBoard } from "./pages/subPages";
import ProtectedPage from "./pages/ProtectedPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import AdvanceResearch from "./pages/subPages/AdvancedSearch";
import { useAppContext } from "./context/appContext";
import { DATABASE } from "./database";
import { useState, useEffect } from "react";

import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  const { codes } = useAppContext();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const clear = () => {
    setInput("");
    setResults([]);
    setSearchPerformed(false);
    setShowResults(true);
  };

  const search = (input) => {
    if (input.trim() === "") {
      console.log("Please input something to search for");
      return;
    }

    const searchResults = DATABASE.filter((item) => {
      const inputLowerCase = input.toLowerCase();
      const titleLowerCase = item.title.toLowerCase();
      const descriptionLowerCase = item.description.toLowerCase();

      return (
        titleLowerCase.startsWith(inputLowerCase) ||
        descriptionLowerCase.includes(inputLowerCase) ||
        (!isNaN(input) && (item.id === input || titleLowerCase.includes(inputLowerCase)))
      );
    });
    console.log(input);
    if (searchResults.length === 0) {
      console.log("No results found for search input:", input);
    }
    setResults(searchResults);
    setSearchPerformed(true);
    setInput("");
  };

  //Smoothe transition between pages
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Layout />
              </ProtectedPage>
            }>
            <Route
              // index="all-codes"
              path="all-codes"
              element={
                <AllCodes
                  input={input}
                  setInput={setInput}
                  search={search}
                  clear={clear}
                  results={results}
                  searchPerformed={searchPerformed}
                  showResults={showResults}
                  // codes={codes}
                />
              }
            />
            <Route path="/" element={<Dashboard />} />
            <Route path="add-codes" element={<AddCodes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="success-board" element={<SuccessBoard />} />
            <Route path="advanced-search" element={<AdvanceResearch />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
