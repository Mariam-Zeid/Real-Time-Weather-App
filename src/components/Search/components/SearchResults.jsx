import SearchItem from "./SearchItem";

export default function SearchResults({
  setView,
  searchResult,
  setSearchQuery,
}) {
  return (
    <div className="search-result-wrapper">
      <div className="search-list">
        {searchResult.map((searchItem, index) => (
          <SearchItem
            key={index}
            setView={setView}
            searchItem={searchItem}
            setSearchQuery={setSearchQuery} 
          />
        ))}
      </div>
    </div>
  );
}
