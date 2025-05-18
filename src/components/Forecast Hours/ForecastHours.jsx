import ForecastItem from "./ForecastItem";

export default function ForecastHours() {
  return (
    <section className="forecast-hours-section">
      <h2 className="box-title">Today at</h2>
      <div className="forecast-hours-box">
        {/* Forecast Degree */}
        <div className="forecast-list">
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
          <ForecastItem type="degree" img="02d" value="25" date="1654560000" />
        </div>

        {/* Forecast Wind */}
        <div className="forecast-list">
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
          <ForecastItem
            type="wind"
            value="25"
            date="1654560000"
            windDirection="8"
          />
        </div>
      </div>
    </section>
  );
}
