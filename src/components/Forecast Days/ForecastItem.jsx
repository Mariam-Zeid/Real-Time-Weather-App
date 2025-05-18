export default function ForecastItem() {
  return (
    <div className="forecast-item">
      <div className="forecast-weather">
        <img
          src={`imgs/weather_icons/02d.png`}
          alt="weather icon"
          width="36"
          height="36"
        />
        <p className="degree">
          25&deg;<sup>c</sup>
        </p>
      </div>
      <div className="day-forecast-date">
        <p className="forecast-text">15 May</p>
        <p className="forecast-text">Wednesday</p>
      </div>
    </div>
  );
}
