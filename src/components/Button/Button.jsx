export default function Button({ className = "", handleClick, children }) {
  return (
    <button onClick={handleClick} className={`icon-wrapper ${className}`}>
      {children}
    </button>
  );
}
