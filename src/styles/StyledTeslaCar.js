import styled from "styled-components";
import tesla_car__img from "../assets/tesla.jpg";
import tesla_wheel_19__img from "../assets/wheel-19.png";
import tesla_wheel_21__img from "../assets/wheel-21.png";

const StyledTeslaCar = styled.div`
  width: 100%;
  min-height: 350px;
  background: #fff url(${tesla_car__img}) no-repeat top center;
  background-size: contain;

  .tesla-wheels {
    height: 247px;
    width: 555px;
    position: relative;
    margin: 0 auto;
  }

  .tesla-wheel {
    height: 80px;
    width: 80px;
    bottom: 0;
    position: absolute;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
  }

  .tesla-wheel--front {
    left: 53px;
  }

  .tesla-wheel--rear {
    right: 72px;
  }

  .tesla-wheel--19 {
    background-image: url(${tesla_wheel_19__img});
    -webkit-animation: infinite-spinning 250ms steps(6) infinite;
    -moz-animation: infinite-spinning 250ms steps(6) infinite;
    -o-animation: infinite-spinning 250ms steps(6) infinite;
    animation: infinite-spinning 250ms steps(6) infinite;
  }

  .tesla-wheel--21 {
    background-image: url(${tesla_wheel_21__img});
    -webkit-animation: infinite-spinning 480ms steps(12) infinite;
    -moz-animation: infinite-spinning 480ms steps(12) infinite;
    -o-animation: infinite-spinning 480ms steps(12) infinite;
    animation: infinite-spinning 480ms steps(12) infinite;
  }

  @keyframes infinite-spinning {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes infinite-spinning {
    from {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default StyledTeslaCar;
