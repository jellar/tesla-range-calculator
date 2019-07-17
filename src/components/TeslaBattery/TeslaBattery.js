import React from "react";
import "./TeslaBattery.css";
import TeslaNotice from "../TeslaNotice/TeslaNotice";

const TeslaBattery = () => {
  return (
    <div className="tesla-battery">
      <h1>Range Per Change</h1>
      <TeslaNotice />
    </div>
  );
};

export default TeslaBattery;
