export default function Footer() {
  return (
    <footer className="footer">
      <p>powerd by</p>
      <a href="https://openweathermap.org/api" className="openWeather-link">
        <img
          src="/imgs/openweather.png"
          alt="OpenWeather logo"
          className="openWeather-logo"
        />
      </a>
    </footer>
  );
}
