import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddCodes, AllCodes, Profile, Layout, SuccessBoard } from "./pages/subPages";
import ProtectedPage from "./pages/ProtectedPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import AdvanceResearch from "./pages/subPages/AdvancedSearch";
import { useAppContext } from "./context/appContext";

import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./theme";

import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  const { codes, _id, deleteCode } = useAppContext();
  //DARK MODE
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  //Smoothe transition between pages
  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedPage>
                  <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                </ProtectedPage>
              }>
              <Route
                // index="all-codes"
                path="all-codes"
                element={
                  <AllCodes
                    toggleTheme={toggleTheme}
                    isDarkTheme={isDarkTheme}
                    deleteCode={deleteCode}
                    // _id={_id}
                    // codes={codes}
                  />
                }
              />
              <Route
                path="/"
                element={<Dashboard toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
              />
              <Route
                path="add-codes"
                element={<AddCodes toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
              />
              <Route
                path="profile"
                element={<Profile toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
              />
              <Route
                path="success-board"
                element={<SuccessBoard toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
              />
              <Route
                path="advanced-search"
                element={<AdvanceResearch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
              />
            </Route>

            <Route
              path="/register"
              element={<Register toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
            />
            <Route
              path="/homepage"
              element={<HomePage toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
