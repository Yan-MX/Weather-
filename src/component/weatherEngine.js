import React, { useState, useRef, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

function WeatherEngine({ location }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=95793191f696bb0095d19402eda45793`
      );
      const resJson = await apiRes.json();
      setWeather({
        temp: resJson.main.temp,
        city: resJson.name,
        condition: resJson.weather[0].main,
        country: resJson.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  const inputCity = useRef(null);
  useEffect(() => {
    if ((inputCity === null) | (inputCity.current === null)) {
      console.log("null");
    } else {
      inputCity.current.focus();
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form>
            <input
              type="text"
              ref={inputCity}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading & error ? (
        <div style={{ color: "black" }}>
          <button onClick={(e) => setError(false)}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherEngine;
