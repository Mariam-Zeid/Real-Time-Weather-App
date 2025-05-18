export default function SearchButton({ handleToggleView }) {
  return (
    <button onClick={handleToggleView} className="search-btn on-focus-cirle">
      <span className="m-icon">search</span>
    </button>
  );
}
