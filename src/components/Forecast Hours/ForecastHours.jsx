import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../Loading Screen/Loading";
import ErrorMessage from "../Error Message/ErrorMessage";
import ForecastItem from "./ForecastItem";
import { useCoords } from "../../hooks/useCoords";

export default function ForecastHours() {
  const { coords } = useCoords();
  const forecastEndPoint = `data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&cnt=8&units=metric`;
  const { data, status, errorMessage } = useFetchData(forecastEndPoint);
  if (status === "loading" || status === "pending") return <Loading />;
  if (status === "error") return <ErrorMessage errorMessage={errorMessage} />;

  return (
    <section className="forecast-hours-section">
      <h2 className="box-title">Today at</h2>
      <div className="forecast-hours-box">
        {/* Forecast Degree */}
        <div className="forecast-list">
          {data.list.map((day, index) => (
            <ForecastItem
              key={index}
              type="degree"
              img={day.weather[0].icon}
              value={Math.ceil(day.main.temp)}
              date={day.dt}
            />
          ))}
        </div>

        {/* Forecast Wind */}
        <div className="forecast-list">
          {data.list.map((day, index) => (
            <ForecastItem
              key={index}
              type="wind"
              value={day.wind.speed}
              date={day.dt}
              windDirection={day.wind.deg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
