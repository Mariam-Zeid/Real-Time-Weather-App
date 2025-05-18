import ForecastItem from "./ForecastItem";

export default function ForecastDays() {
  return (
    <section className="forecast-days-section">
      <h2 className="box-title">5 Days Forecast</h2>
      <div className="forecast-days-box box main-box">
        <div className="forecast-list">
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
        </div>
      </div>
    </section>
  );
}
