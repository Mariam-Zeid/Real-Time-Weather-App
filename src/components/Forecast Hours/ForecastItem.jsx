export default function ForecastItem({
  type,
  img,
  value,
  date,
  windDirection,
}) {
  const time = date * 1000;
  const formatedTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const windDirectionStyles = {
    transform: `rotate(${windDirection - 180}deg)`,
  };
  return (
    <div className="forecast-weather forecast-item box main-box">
      <p>{formatedTime}</p>
      <img
        src={`imgs/weather_icons/${type === "wind" ? "direction" : img}.png`}
        alt="Weather Icon"
        width="48"
        height="48"
        style={type === "wind" ? windDirectionStyles : null}
      />
      {type === "wind" ? <p>{value}km/h</p> : <p>{value}&deg;c</p>}
    </div>
  );
}
