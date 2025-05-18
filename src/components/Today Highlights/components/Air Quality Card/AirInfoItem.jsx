export default function AirInfoItem({ title, subtitle, value }) {
  return (
    <div className="info-item">
      <p className="info-description">{value}</p>
      <p className="info-title">
        {title}
        <sub>{subtitle}</sub>
      </p>
    </div>
  );
}
