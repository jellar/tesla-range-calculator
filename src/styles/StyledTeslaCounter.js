import styled from "styled-components";
import up_img from "../assets/counter/up.svg";
import down_img from "../assets/counter/down.svg";

const StyledTeslaCounter = styled.div`
  float: left;
  width: 230px;

  .tesla-counter__title {
    letter-spacing: 2px;
    font-size: 16px;
  }
  .tesla-counter__container {
    margin: 10px 0 0;
    padding-right: 40px;
  }
  .tesla-counter__container input[type="number"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .tesla-counter__number {
    font-family: "RobotoNormal";
    font-size: 25px;
    line-height: 25px;
    font-weight: 400;
    position: relative;
  }
  .tesla-counter__number span {
    position: absolute;
    top: 0;
    left: 35px;
    font-size: 15px;
    text-transform: uppercase;
  }
  .tesla-counter__item {
    position: relative;
    width: 100%;
    height: 65px;
    border: 1px solid #ccc;
    display: inline-block;
    padding: 18px 0 0 30px;
    margin: 0 8px 0 0;
    background-color: #f7f7f7;
    background-position: 24.21053% 9px;
    background-repeat: no-repeat;
    background-size: 44px;
  }
  .tesla-counter__item:focus {
    background-color: #f2f2f2;
    outline: none;
  }
  .tesla-counter__controls {
    position: absolute;
    right: 10px;
    top: 7px;
  }
  .tesla-counter__controls button {
    outline: 0;
    width: 30px;
    color: #008dff;
    cursor: pointer;
    display: block;
    padding: 11px 0;
    vertical-align: middle;
    border: 0;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
  }
  .tesla-counter__controls button[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .tesla-counter__controls button:first-child {
    border-bottom: 1px solid #fff;
    background-image: url(${up_img});
  }
  .tesla-counter__controls button:last-child {
    border-top: 1px solid #ccc;
    background-image: url(${down_img});
  }
`;

export default StyledTeslaCounter;
