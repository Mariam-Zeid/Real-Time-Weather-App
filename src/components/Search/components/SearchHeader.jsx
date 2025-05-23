import { useEffect } from "react";
import SearchInput from "./SearchInput";
import ArrowBackButton from "./ArrowBackButton";
import { useFetchData } from "../../../hooks/useFetchData";
import { API_KEY } from "../../../lib/config";

export default function SearchHeader({
  handleToggleView,
  setSearchedResult,
  searchQuery,
  setSearchQuery,
}) {
  const endPoint =
    searchQuery.trim() !== ""
      ? `/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${API_KEY}`
      : null;

  const { data, status } = useFetchData(endPoint, true);
  const handleSearchQuery = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    setSearchedResult(data);
  }, [data, setSearchedResult]);

  return (
    <div
      className={`search-input-wrapper ${status === "loading" && "loading"}`}
    >
      <ArrowBackButton handleToggleView={handleToggleView} />
      <SearchInput
        handleSearchQuery={handleSearchQuery}
        searchQueryVal={searchQuery}
      />
    </div>
  );
}
