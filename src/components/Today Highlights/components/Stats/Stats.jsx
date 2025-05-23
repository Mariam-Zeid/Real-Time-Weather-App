import StatsCard from "./StatsCard";

const stats = [
  {
    name: "humidity",
    title: "humitidy",
    icon: "humidity_percentage",
    statsUnit: "%",
  },
  {
    name: "pressure",
    title: "pressure",
    icon: "airwave",
    statsUnit: "hPa",
  },
  {
    name: "visibility",
    title: "visibility",
    icon: "visibility",
    statsUnit: "km",
  },
  {
    name: "feels_like",
    title: "feels like",
    icon: "thermostat",
    statsUnit: "c",
    htmlUnit: "°",
  },
];
export default function Stats({ statsData: data }) {
  return (
    <div className="stats-list">
      {stats.map((item, index) => (
        <StatsCard
          key={index}
          {...item}
          statsNumber={data[item.name] || data.main[item.name]}
        />
      ))}
    </div>
  );
}
