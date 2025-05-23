import CycleItem from "./CycleItem";

export default function SunCycleCard({ sunCycleTime }) {
  const sunriseTime = sunCycleTime.sunrise * 1000;
  const formatedSunriseTime = new Date(sunriseTime).toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "2-digit", hour12: true }
  );

  const sunsetTime = sunCycleTime.sunset * 1000;
  const formatedSunsetTime = new Date(sunsetTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="sun-cycle-card sub-box">
      <h3 className="sub-title">sunset & sunrise</h3>
      <div className="cycle-list">
        <CycleItem
          icon={"clear_day"}
          title={"sunrise"}
          time={formatedSunriseTime}
        />
        <CycleItem
          icon={"clear_night"}
          title={"sunset"}
          time={formatedSunsetTime}
        />
      </div>
    </div>
  );
}
