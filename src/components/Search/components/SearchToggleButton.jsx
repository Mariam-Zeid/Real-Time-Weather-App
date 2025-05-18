import Button from "../../Button/Button";

export default function SearchToggleButton({ handleToggleView }) {
  return (
    <Button handleClick={handleToggleView} className="arrow-back-icon">
      <span className="m-icon">arrow_back</span>
    </Button>
  );
}
