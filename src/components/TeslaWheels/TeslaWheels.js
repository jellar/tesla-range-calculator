import React from "react";
import PropTypes from "react";
import "./TeslaWheels.css";

const LableLists = props => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.handleChangeWheels;
  const sizes = [19, 21];

  const LabelItems = sizes.map(size => (
    <label
      key={size}
      className={`tesla-wheels__item tesla-wheels__item--${size} ${
        value === size ? "tesla-wheels__item--active" : ``
      }`}
    >
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size}
        onChange={() => {
          changeHandler(size);
        }}
      />
      <p>{size}</p>
    </label>
  ));
  return <div>{LabelItems}</div>;
};
export default function TeslaWheels(props) {
  return (
    <div className="tesla-wheels__component">
      <p className="tesla-wheels__title">Wheels</p>
      <div className="tesla-wheels__container cf">
        <LableLists wheels={props} />
      </div>
    </div>
  );
}

TeslaWheels.protoTypes = {
  value: PropTypes.number,
  handleChangeWheels: PropTypes.func
};
