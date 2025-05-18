import { useEffect, useState } from "react";
import Loading from "../Loading Screen/Loading";
import AirQualityCard from "./components/Air Quality Card/AirQualityCard";
import Stats from "./components/Stats/Stats";
import SunCycleCard from "./components/Sun Cycle Card/SunCycleCard";

export default function TodayHighlights() {
  return (
    <div className="todays-highlights-box box main-box">
      <h2 className="box-title">todays highlights</h2>
      <div className="cards-wrapper">
        <AirQualityCard />
        <SunCycleCard />
        <Stats/>
      </div>
    </div>
  );
}
