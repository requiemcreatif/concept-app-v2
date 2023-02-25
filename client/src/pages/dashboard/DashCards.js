import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import SearchInputField from "../../components/SearchInputField";
import GeneralCode from "./GeneralCode";

const DashCards = ({ toggleTheme, isDarkTheme }) => {
  const { getAllCodes, codes, totalCodes, isLoading, numOfPages, page } = useAppContext();
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
    <div>
      <div className="code-display">
        {filteredCodes.map((code, index) => {
          return (
            <GeneralCode
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

export default DashCards;
