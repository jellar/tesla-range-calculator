import React from "react";
import PropTypes from "prop-types";
import "./TeslaCounter.css";
const TeslaCounter = ({ initValues, currentValue, increment, decrement }) => {
  return (
    <div className="tesla-counter">
      <p className="tesla-counter__title">{initValues.title}</p>
      <div className="tesla-counter__container cf">
        <div className="tesla-counter__item">
          <p className="tesla-counter__number">
            {currentValue}
            <span>{initValues.unit}</span>
          </p>
          <div className="tesla-counter__controls">
            <button
              onClick={e => {
                e.preventDefault();
                increment(currentValue);
              }}
              disabled={currentValue >= initValues.max}
            />
            <button
              onClick={e => {
                e.preventDefault();
                decrement(currentValue);
              }}
              disabled={currentValue <= initValues.min}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
TeslaCounter.propTypes = {
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  initValues: PropTypes.object
};
export default TeslaCounter;
