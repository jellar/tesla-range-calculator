import { connect } from "react-redux";
import TeslaClimate from "../components/TeslaClimate/TeslaClimate";
import { climateChange } from "../actions";
function mapStateToProps(state) {
  return {
    value: state.config.climate,
    limit: state.config.temperature > 10
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeClimate: () => {
      dispatch(climateChange());
    }
  };
}
const TeslaClimateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeslaClimate);
export default TeslaClimateContainer;
