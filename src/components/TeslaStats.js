import React from "react";
import PropTypes from "prop-types";
import StyledTeslaStats from "../styles/StyledTeslaStats";

const TeslaStats = props => {
  const listItems = props.carstats.map(stat => (
    <li key={stat.model}>
      <div
        className={
          "tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}"
        }
      />
      <p>{stat.miles}</p>
    </li>
  ));

  return (
    <StyledTeslaStats>
      <ul>{listItems}</ul>
    </StyledTeslaStats>
  );
};

TeslaStats.propTypes = {
  carstats: PropTypes.array
};

export default TeslaStats;
