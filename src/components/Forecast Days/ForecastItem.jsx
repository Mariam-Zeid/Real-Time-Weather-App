export default function ForecastItem({ day }) {
  const date = new Date(day.dt * 1000);
  const formatedDate = `${date.getDate()} ${date.toLocaleString("en", {
    month: "short",
  })}`;
  const dayName = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    date
  );
  return (
    <div className="forecast-item">
      <div className="forecast-weather">
        <img
          src={`imgs/weather_icons/${day.weather[0].icon}.png`}
          alt={day.weather[0].description}
          width="36"
          height="36"
        />
        <p className="degree">
          {Math.ceil(day.main.feels_like)}&deg;<sup>c</sup>
        </p>
      </div>
      <div className="day-forecast-date">
        <p className="forecast-text">{formatedDate}</p>
        <p className="forecast-text">{dayName}</p>
      </div>
    </div>
  );
}
