import './WeatherApp.scss';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import api from '../api_key';
import { cityDataProps } from '../interfaces';
import MapContainer from '../Components/MapContainer';
import Map from '../Components/Map';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState<cityDataProps>();
  // const [dataError, setDataError] = useState('');

  const getCityData = (value: string) => {
    axios
      .get<cityDataProps>(`${api.baseURI}?q=${city}&appid=${api.weatherAPIkey}&units=metric`)
      .then((response: AxiosResponse) => setCityData(response.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getCityData(city);
    setCity('');
  };
  console.log(cityData);
  return (
    <div className={`weather ${cityData?.weather[0].main.toLowerCase()}`}>
      <div className="weather__wrapper">
        <h1 className="weather__banner">Weather around the world</h1>
        <div className="weather__output">
          <div className="weather__mapContainer">
            <MapContainer
              lat={cityData?.coord.lat || 0}
              lon={cityData?.coord.lon || 0}
            />
          </div>

          <div className="data-container">
            <div className="search-container">
              <form onSubmit={submitHandler} className="search__form">
                <Input
                  className="form__input-email"
                  autocomplete="off"
                  type="text"
                  name="email"
                  placeholder="Type city name..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Button
                  type="submit"
                  className="form__submit"
                  value="Search"
                />
              </form>
            </div>

            <div className="card-container">
              <div className="card-header">
                <h4 id="city-name" className="">{cityData?.name}</h4>

              </div>
              <div className="card-body">
                <h1 className="card-title">{cityData?.weather[0].main}</h1>
                <ul className="">
                  <li>
                    Temp:
                    {cityData?.main.temp}
                    &deg;C
                  </li>
                  <li>
                    Min Temp:
                    {cityData?.main.temp_min}
                    &deg;C
                  </li>
                  <li>
                    Max Temp:
                    {cityData?.main.temp_max}
                    &deg;C
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherApp;
