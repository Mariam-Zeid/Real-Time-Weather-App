import { useState } from "react";
import SearchButton from "./components/SearchButton";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";

export default function Search() {
  const [isViewOpen, setView] = useState(false);
  const handleToggleView = () => {
    setView((prev) => !prev);
  };
  return (
    <div className="search-wrapper">
      <SearchButton handleToggleView={handleToggleView}/>
      <div className={isViewOpen ? `search-view active` : `search-view`}>
        <SearchHeader handleToggleView={handleToggleView} />
        <SearchResults />
      </div>
    </div>
  );
}