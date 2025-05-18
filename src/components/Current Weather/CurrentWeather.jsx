export default function CurrentWeather() {

  return (
    <div className="current-weather-box box main-box">
      <h2 className="box-title">now</h2>
      <div className="current-weather">
        <p className="degree">
          25&deg;<sup>c</sup>
        </p>
        <img
          src={`imgs/weather_icons/02d.png`}
          alt="weather icon"
          className="weather-icon"
        />
      </div>
      <p className="weather-description">Cloudy</p>
      <div className="current-meta-wrapper">
        <div className="meta-item">
          <span className="m-icon">calendar_today</span>
          <p className="meta-text">Thursday 15 May</p>
        </div>
        <div className="meta-item">
          <span className="m-icon">location_on</span>
          <p className="meta-text">
            Cairo, EG
          </p>
        </div>
      </div>
    </div>
  );
}
