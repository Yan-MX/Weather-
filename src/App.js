import React from "react";
import WeatherEngine from "./component/weatherEngine";
import styled from "@emotion/styled";
function App() {
  const App = styled.div`
    display: flex;
    margin: 0 auto;
    color: white;
  `;
  return (
    <App>
      <WeatherEngine location="Oslo" />
      <WeatherEngine location="Beijing" />
      <WeatherEngine location="Tokyo" />
    </App>
  );
}
export default App;
