import CycleItem from "./CycleItem";

export default function SunCycleCard() {
  return (
    <div className="sun-cycle-card sub-box">
      <h3 className="sub-title">sunset & sunrise</h3>
      <div className="cycle-list">
        <CycleItem icon={"clear_day"} title={"sunrise"} time="5:00 am" />
        <CycleItem icon={"clear_night"} title={"sunset"} time="8:00 pm" />
      </div>
    </div>
  );
}
