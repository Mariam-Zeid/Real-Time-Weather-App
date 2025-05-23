import { useFetchData } from "../../hooks/useFetchData";
import ErrorMessage from "../Error Message/ErrorMessage";
import Loading from "../Loading Screen/Loading";
import ForecastItem from "./ForecastItem";

export default function ForecastDays({ coords }) {
  const forecastEndPoint = `data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric`;
  const { data, status, errorMessage } = useFetchData(forecastEndPoint);
  if (status === "loading" || status === "pending") return <Loading />;
  if (status === "error") return <ErrorMessage errorMessage={errorMessage} />;
  
  const filterDaysByFirstTime = () => {
    const today = new Date().toISOString().split("T")[0];
    const uniqueDays = new Set();
    const filteredDays = data.list.filter((day) => {
      const [date] = day.dt_txt.split(" ");
      if (date > today && !uniqueDays.has(date)) {
        uniqueDays.add(date);
        return true;
      }
      return false;
    });

    return filteredDays;
  };
  const filteredDays = filterDaysByFirstTime();

  return (
    <section className="forecast-days-section">
      <h2 className="box-title">5 Days Forecast</h2>
      <div className="forecast-days-box box main-box">
        <div className="forecast-list">
          {filteredDays.map((day, index) => (
            <ForecastItem key={index} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
