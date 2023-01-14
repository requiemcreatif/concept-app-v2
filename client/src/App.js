import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import { DATABASE } from "./database";
import { useState } from "react";

import "./App.css";

function App() {
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
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/register">Register</Link>
          <Link to="/homepage">Homepage</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <SearchBar
        input={input}
        setInput={setInput}
        search={search}
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
      />
      <Display
        input={input}
        setInput={setInput}
        search={search}
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
      /> */}
    </div>
  );
}

export default App;
