import styled from "styled-components";
import model_60_img from "../assets/models/60.svg";
const StyledTeslaStats = styled.div`
  margin: -70px 0 30px;

  ul {
    text-align: center;
  }
  ul li {
    display: inline-block;
    width: 130px;
    position: relative;
  }
  ul li p {
    font-size: 40px;
    font-weight: normal;
    font-family: "RobotoNormal";
    display: block;
    padding: 0 18px 0 0;
    position: relative;
    color: #008dff;
    text-align: right;
  }
  ul li p:after {
    font-size: 14px;
    font-weight: normal;
    font-family: "RobotoNormal";
    content: "MI";
    position: absolute;
    top: 8px;
    right: 0;
  }
  .tesla-stats-icon {
    height: 20px;
    background-size: auto 13px;
    background-position: top right;
    background-repeat: no-repeat;
  }
  .tesla-stats-icon--60 {
    /* background-image: url(${model_60_img}); */
  }
  .tesla-stats-icon--60d {
    background-image: url(../../assets/models/60d.svg);
  }
  .tesla-stats-icon--75 {
    background-image: url(../../assets/models/75.svg);
  }
  .tesla-stats-icon--75d {
    background-image: url(../../assets/models/75d.svg);
  }
  .tesla-stats-icon--90d {
    background-image: url(../../assets/models/90d.svg);
  }
  .tesla-stats-icon--p100d {
    background-image: url(../../assets/models/p100d.svg);
  }
`;

export default StyledTeslaStats;
