import SearchItem from "./SearchItem";

export default function SearchResults() {
  return (
    <div className="search-result-wrapper">
      <div className="search-list">
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
      </div>
    </div>
  );
}
