import { connect } from "react-redux";
import TeslaCounter from "../components/TeslaCounter/TeslaCounter";
import { speedUp, speedDown } from "../actions";
import { counterDefaultVal } from "../constants/counterDefaultVal";

function mapStateToProps(state) {
  return {
    currentValue: state.config.speed,
    initValues: counterDefaultVal.speed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: value => {
      dispatch(speedUp(value));
    },
    decrement: value => {
      dispatch(speedDown(value));
    }
  };
}

const TeslaSpeedCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeslaCounter);

export default TeslaSpeedCounterContainer;
