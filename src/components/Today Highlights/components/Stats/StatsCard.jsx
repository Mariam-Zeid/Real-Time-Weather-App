export default function StatsCard({
  name,
  title,
  icon,
  statsNumber = 25,
  statsUnit,
  htmlUnit = "",
}) {
  const formatedValue =
    name === "visibility"
      ? statsNumber / 1000
      : name === "feels_like"
      ? Math.ceil(statsNumber)
      : statsNumber;
  return (
    <div className="stats-card sub-box">
      <h3 className="sub-title">{title}</h3>
      <div className="info-item">
        <span className="m-icon">{icon}</span>
        <p className="info-description">
          {formatedValue}
          {htmlUnit && htmlUnit}
          <sub>{statsUnit}</sub>
        </p>
      </div>
    </div>
  );
}
