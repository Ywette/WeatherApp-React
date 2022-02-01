import './WeatherApp.scss';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { cityDataProps } from '../interfaces';
import Input from '../Components/Input';
import Button from '../Components/Button';
import api from '../api_key';

import MapContainer from '../Components/MapContainer';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState<cityDataProps>();

  const getCityData = (value: string) => {
    axios
      .get<cityDataProps>(`${api.baseURI}?q=${city}&appid=${api.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then((response: AxiosResponse) => setCityData(response.data))
      .catch((err) => {
        // console.log(err);
      });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getCityData(city);
    setCity('');
  };

  return (
    <div className={`weather ${cityData?.weather[0].main.toLowerCase()}`}>
      <div className="weather__wrapper">
        <h1 className="weather__banner">Weather around the world</h1>
        <div className="weather__output">

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

            <div className="card__container">
              <div className="card__header">
                <h4 className="city__name">
                  City:
                  {cityData?.name}
                </h4>

              </div>
              <div className="card__body">
                <h1 className="card__title">
                  {cityData?.weather[0].main}
                </h1>
                <ul className="card__info-list">
                  <li className="card__info-item">
                    Temp:
                    {cityData?.main.temp}
                    &deg;C
                  </li>
                  <li className="card__info-item">
                    Min Temp:
                    {cityData?.main.temp_min}
                    &deg;C
                  </li>
                  <li className="card__info-item">
                    Max Temp:
                    {cityData?.main.temp_max}
                    &deg;C
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <MapContainer
            lat={cityData?.coord.lat || 54}
            lon={cityData?.coord.lon || 0}
          />
        </div>

      </div>
    </div>
  );
};

export default WeatherApp;
