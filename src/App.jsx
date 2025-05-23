import { useState } from "react";
import Header from "./components/Header/Header";
import CurrentWeather from "./components/Current Weather/CurrentWeather";
import ForecastDays from "./components/Forecast Days/ForecastDays";
import TodayHighlights from "./components/Today Highlights/TodayHighlights";
import ForecastHours from "./components/Forecast Hours/ForecastHours";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [coords, setCoords] = useState({ lat: 51.5073219, lon: -0.1276474 });

  return (
    <div className="app-container">
      <Header setCoords={setCoords} />
      <div className="content-wrapper">
        <div className="col">
          <CurrentWeather coords={coords} />
          <ForecastDays coords={coords} />
        </div>
        <div className="col">
          <TodayHighlights coords={coords} />
          <ForecastHours coords={coords} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
