import { useEffect, useState } from "react";
import AirInfoItem from "./AirInfoItem";
import Loading from "../../../Loading Screen/Loading";

export const AIR_QUALITY_INDEX_TEXT = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health affect. the general public is not likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions. the entire population is more likely to be affected.",
  },
};

const atmosphericComponents = [
  {
    unit: "pm2_5",
    title: "PM",
    subtitle: "2.5",
  },
  {
    unit: "so2",
    title: "SO",
    subtitle: "2",
  },
  {
    unit: "no2",
    title: "NO",
    subtitle: "2",
  },
  {
    unit: "o3",
    title: "O",
    subtitle: "3",
  },
];

export default function AirQualityCard() {
  return (
    <div className="air-quality-card sub-box">
      <p
        className={`badge aqi-${1} label-1`}
        title={AIR_QUALITY_INDEX_TEXT[1].message}
      >
        {AIR_QUALITY_INDEX_TEXT[1].level}
      </p>
      <h3 className="sub-title">air quality index</h3>
      <div className="air-info-wrapper">
        <span className="m-icon air-icon">air</span>
        <div className="air-info-list">
          {atmosphericComponents.map((item, index) => (
            <AirInfoItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              value="20"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
