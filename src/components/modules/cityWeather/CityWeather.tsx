import React, { useContext, useEffect, useState } from 'react';
import { SearchC } from '../../../context/searchBoxContext/SearchBoxContext';
import UseFetch from '../../common/useFetch';
import WeatherCard from '../../common/weatherCard';

export const CityWeather = () => {
  const { search } = useContext(SearchC);
  const [sdata, setsdata] = useState('');
  useEffect(() => {
    setsdata(search);
  }, [search]);
  const website = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const api_key = `&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const {
    data: udata,
    isPending,
    error,
  } = UseFetch(`${website}${sdata}${api_key}`);
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      )}
      <div>{udata && <WeatherCard wdata={udata} />}</div>
    </div>
  );
};
