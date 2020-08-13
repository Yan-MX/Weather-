import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ city, country, temp, condition }) => {
  let bg = null;
  let highColor = 0;
  let lowColor = 0;
  if (temp > 18) {
    highColor = (1 - (temp - 18) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(205, ${highColor}, 50),
      rgb(205, ${lowColor}, 50)
    )`;
  } else if (temp <= 18) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(50, ${highColor}, 205),
      rgb(50, ${lowColor}, 205)
    )`;
  }
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
