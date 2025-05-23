export default function SearchInput({ handleSearchQuery, searchQueryVal }) {
  return (
    <input
      type="search"
      placeholder="Search for city..."
      className="search-input"
      onChange={(e) => handleSearchQuery(e)}
      value={searchQueryVal}
    />
  );
}
