import React from "react";
import PropTypes from "prop-types";
import StyledTeslaCar from "../styles/StyledTeslaCar";

const TeslaCar = props => {
  return (
    <StyledTeslaCar>
      <div className="tesla-wheels">
        <div
          className={`tesla-wheel tesla-wheel--front tesla-wheel--${
            props.wheelsize
          }`}
        />
        <div
          className={`tesla-wheel tesla-wheel--rear tesla-wheel--${
            props.wheelsize
          }`}
        />
      </div>
    </StyledTeslaCar>
  );
};

TeslaCar.propTypes = {
  wheelsize: PropTypes.number
};
export default TeslaCar;
