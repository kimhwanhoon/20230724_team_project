import React from 'react';
import { styled, keyframes } from 'styled-components';
import { useQuery } from 'react-query';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { getWeatherData } from '../../axios/weatherApi';
import { useState } from 'react';

export const Weather = () => {
  const [isLocationRequested, setIsLocationRequested] = useState(false);
  const { location, error } = useCurrentLocation();

  const handleLocationRequest = () => {
    setIsLocationRequested(true);
  };

  const dateBuilder = (d) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // sunday 먼저..!!
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();
    let hours = d.getHours().toString().padStart(2, '0');
    let minutes = d.getMinutes().toString().padStart(2, '0');

    return (
      <DateBuild>
        <h3>&nbsp;{`${hours}:${minutes}`}&nbsp;&nbsp;&nbsp;</h3>
        {`${day} ${date} ${month} ${year}`}
      </DateBuild>
    );
  };

  const {
    data: weatherData,
    isLoading,
    isError
  } = useQuery(['weather', location], () => getWeatherData(location.latitude, location.longitude), {
    enabled: location !== null
  });

  if (error) {
    return <Alert>Error: {error}</Alert>;
  }

  if (!location) {
    return <Alert>Loading...</Alert>;
  }

  if (isLoading) {
    return <Alert>Loading weather data...</Alert>;
  }

  if (isError) {
    return <Alert>Error occurred while fetching weather data</Alert>;
  }

  const { name, weather, main } = weatherData;
  // const currentDate = new Date();

  return (
    <>
      <WeatherWrapper>
        <WeatherInner>
          <WeatherImg src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="Weather Icon" />
          <span>{`${main.temp}°C`}</span>
          <WeatherDate>{dateBuilder(new Date())}</WeatherDate>
        </WeatherInner>
        <LocationName>{name}</LocationName>
      </WeatherWrapper>
    </>
  );
};

const Alert = styled.div`
  width: 340px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(225, 225, 225, 0.795);
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;

  background-color: rgba(225, 225, 225, 0.362);
`;

const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const WeatherWrapper = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background-color: rgba(225, 225, 225, 0.362);
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(70, 70, 70, 0.72);
  cursor: pointer;

  &:hover {
    animation: ${growAnimation} 0.5s ease-in-out;
    background-color: rgba(225, 225, 225, 0.45);
  }
`;

const WeatherImg = styled.img`
  width: 60px;
`;

const WeatherInner = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(225, 225, 225, 0.362);
  padding: 0px 20px;
  border-radius: 20px 20px 0 0;
  margin-top: 6px;
`;
const LocationName = styled.div`
  padding: 2px 0 12px;
  font-weight: 600;
`;

const WeatherDate = styled.div`
  margin: 0 0 0 10px;
`;
const DateBuild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
