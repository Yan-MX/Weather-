import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2 rem;
    font-weight: 500;
  `;
  const Condition = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2 rem;
  `;
  return (
    <>
      <Temp>{temp}</Temp>
      <Condition>{condition}</Condition>
    </>
  );
};

export default Condition;
