import { connect } from "react-redux";
import TeslaWheels from "../components/TeslaWheels/TeslaWheels";
import { wheelChange } from "../actions";
function mapStateToProps(state) {
  return {
    value: state.config.wheels
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleChangeWheels: size => {
      dispatch(wheelChange(size));
    }
  };
}

const TeslaWheelsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeslaWheels);
export default TeslaWheelsContainer;
