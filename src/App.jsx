import Header from "./components/Header/Header";
import CurrentWeather from "./components/Current Weather/CurrentWeather";
import ForecastDays from "./components/Forecast Days/ForecastDays";
import TodayHighlights from "./components/Today Highlights/TodayHighlights";
import ForecastHours from "./components/Forecast Hours/ForecastHours";
import Footer from "./components/Footer/Footer";
import CoordsProvider from "./contexts/coords-context";

export default function App() {
  return (
    <CoordsProvider>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <div className="col">
            <CurrentWeather />
            <ForecastDays />
          </div>
          <div className="col">
            <TodayHighlights />
            <ForecastHours />
          </div>
        </div>
        <Footer />
      </div>
    </CoordsProvider>
  );
}
