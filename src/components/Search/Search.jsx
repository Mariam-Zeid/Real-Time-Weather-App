import { useState } from "react";
import SearchButton from "./components/SearchButton";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";

export default function Search({ setCoords }) {
  const [isViewOpen, setView] = useState(false);
  const [searchResult, setSearchedResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Moved here 👈

  const handleToggleView = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="search-wrapper">
      <SearchButton handleToggleView={handleToggleView} />
      <div className={isViewOpen ? `search-view active` : `search-view`}>
        <SearchHeader
          handleToggleView={handleToggleView}
          setSearchedResult={setSearchedResult}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SearchResults
          setCoords={setCoords}
          setView={setView}
          searchResult={searchResult}
          setSearchQuery={setSearchQuery} // pass to clear input
        />
      </div>
    </div>
  );
}
