import { useCoords } from "../../hooks/useCoords";
import { useFetchData } from "../../hooks/useFetchData";
import ErrorMessage from "../Error Message/ErrorMessage";
import Loading from "../Loading Screen/Loading";
import AirQualityCard from "./components/Air Quality Card/AirQualityCard";
import Stats from "./components/Stats/Stats";
import SunCycleCard from "./components/Sun Cycle Card/SunCycleCard";

export default function TodayHighlights() {
  const { coords } = useCoords();
  const currentWeatherEndPoint = `data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric`;
  const { data, status, errorMessage } = useFetchData(currentWeatherEndPoint);
  if (status === "loading" || status === "pending") return <Loading />;
  if (status === "error") return <ErrorMessage errorMessage={errorMessage} />;

  return (
    <div className="todays-highlights-box box main-box">
      <h2 className="box-title">todays highlights</h2>
      <div className="cards-wrapper">
        <AirQualityCard coords={coords} />
        <SunCycleCard sunCycleTime={data.sys} />
        <Stats statsData={data} />
      </div>
    </div>
  );
}
