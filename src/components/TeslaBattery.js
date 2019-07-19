import React, { useState, useEffect } from "react";
import StyledTeslaBattery from "../styles/StyledTeslaBattery";
import TeslaCar from "../components/TeslaCar";
import TeslaStats from "../components/TeslaStats";
import TeslaNotice from "./TeslaNotice";
import { getModelData } from "../services/BatteryService";

const TeslaBattery = () => {
  const [config, setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  });
  const [carstats, setCarstats] = useState([]);

  useEffect(() => {
    console.log("set state");
    const carmodels = ["60", "60D", "75", "75D", "90D", "P100D"];
    setCarstats(calculateStats(carmodels, config));
  }, []);

  const calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      // ES6 Object destructuring Syntax,
      // takes out required values and create references to them
      const { speed, temperature, climate, wheels } = value;
      const miles =
        dataModels[model][wheels][climate ? "on" : "off"].speed[speed][
          temperature
        ];
      return {
        model,
        miles
      };
    });
  };

  return (
    <StyledTeslaBattery>
      <h1>Range Per Change</h1>
      <TeslaCar wheelsize={config.wheels} />
      <TeslaStats carstats={carstats} />
      <TeslaNotice />
    </StyledTeslaBattery>
  );
};

export default TeslaBattery;
