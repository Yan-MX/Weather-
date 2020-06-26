import React from "react"
import styled from "@emotion/styled"
 
const WeatherCard = (props) => {
  const Card = styled.div`
      margin:0 auto;
      background: linear-gradient(to top,lightblue,grey);
      width:200px;
      height:240px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:center;
      border-radius: 15px;
  `
  

  return ( 
    <Card className="card">
      <div className="location">
        <h1 className ="city">Oslo</h1>
        <h3 className ="country">NO</h3>
      </div>
      <img className="icon" 
            src="./img/sunny.png "
            alt="Weather Icon" />
      <h1 className = "temp">20 C</h1>
      <h3 className='condition'>Sunny</h3>
      
    </Card>
   );
}
 
export default WeatherCard;