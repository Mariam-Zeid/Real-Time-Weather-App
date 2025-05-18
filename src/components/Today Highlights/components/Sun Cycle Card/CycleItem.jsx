export default function CycleItem({ icon, title, time }) {
  return (
    <div className="cycle-item">
      <span className="m-icon">{icon}</span>
      <div className="info-item">
        <p className="info-description">{time}</p>
        <p className="info-title">{title}</p>
      </div>
    </div>
  );
}
