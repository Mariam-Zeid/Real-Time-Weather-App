import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../Loading Screen/Loading";
import ErrorMessage from "../Error Message/ErrorMessage";

export default function CurrentWeather({ coords }) {
  const currentWeatherEndPoint = `data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric`;
  const { data, status, errorMessage } = useFetchData(currentWeatherEndPoint);
  
  const date = new Date(data.dt * 1000);
  const formattedDate = `${date.toLocaleString("en", {
    weekday: "long",
  })}, ${date.getDate()} ${date.toLocaleString("en", { month: "short" })}`;

  if (status === "loading" || status === "pending") return <Loading />;
  if (status === "error") return <ErrorMessage errorMessage={errorMessage} />;

  return (
    <div className="current-weather-box box main-box">
      <h2 className="box-title">now</h2>
      <div className="current-weather">
        <p className="degree">
          {Math.ceil(data.main.feels_like)}&deg;<sup>c</sup>
        </p>
        <img
          src={`imgs/weather_icons/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="weather-icon"
        />
      </div>
      <p className="weather-description">{data.weather[0].description}</p>
      <div className="current-meta-wrapper">
        <div className="meta-item">
          <span className="m-icon">calendar_today</span>
          <p className="meta-text">{formattedDate}</p>
        </div>
        <div className="meta-item">
          <span className="m-icon">location_on</span>
          <p className="meta-text">
            {data.name}, {data.sys.country}
          </p>
        </div>
      </div>
    </div>
  );
}
