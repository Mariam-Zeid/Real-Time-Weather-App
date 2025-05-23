import SearchItem from "./SearchItem";

export default function SearchResults({
  setCoords,
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
            setCoords={setCoords}
            setView={setView}
            searchItem={searchItem}
            setSearchQuery={setSearchQuery} // 👈 pass here
          />
        ))}
      </div>
    </div>
  );
}
