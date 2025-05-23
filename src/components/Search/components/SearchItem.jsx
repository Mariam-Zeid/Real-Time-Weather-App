export default function SearchItem({
  setCoords,
  setView,
  searchItem,
  setSearchQuery,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    setCoords({ lat: searchItem.lat, lon: searchItem.lon });
    setSearchQuery(""); // 👈 Clear input
    setView(false);
  };

  return (
    <div className="search-item">
      <a href="#" className="item-link on-focus-cirle" onClick={handleClick}>
        <span className="m-icon">location_on</span>
        <div className="search-item-info">
          <p className="title">{searchItem.name}</p>
          <p className="label-2 subtitle">
            {searchItem.state} {searchItem.country}
          </p>
        </div>
      </a>
    </div>
  );
}
