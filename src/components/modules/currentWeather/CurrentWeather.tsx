import React from 'react';
import LiveLocation from '../../common/liveLocation';
import UseFetch from '../../common/useFetch';
import WeatherCard from '../../common/weatherCard';
import Search from '../searchBox';
import SearchBox from '../cityWeather';
import Spinner from '../../common/spinner';

export const CurrentWeather = () => {
  const { latitude: lat, longitude: lon } = LiveLocation();
  ////////////////////////////////////////////////////fethch////////////////////////////////////////////////////////////////////

  const website = 'https://api.openweathermap.org/data/2.5/weather?';
  const api_key = `&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const {
    data: udata,
    isPending,
    error,
  } = UseFetch(`${website}lat=${lat}&lon=${lon}${api_key}`);

  const forcastUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
  const {
    data: hourlyData,
    isPending: hourlyPending,
    error: hourlyError,
  } = UseFetch(`${forcastUrl}lat=${lat}&lon=${lon}${api_key}&units=metric`);
  console.log(hourlyData);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const { latitude, longitude } = Currentlocation.state
  return (
    <div className="flex justify-center h-full">
      <div>
        <div>
          {error && <div>{error}</div>}
          {isPending && <Spinner />}
          {udata && <WeatherCard wdata={udata} />}
        </div>
        <div>
          <Search />
          <SearchBox />
        </div>

        <div>
          {hourlyError && <div>{hourlyError}</div>}
          {hourlyPending && <Spinner />}
          {/* {hourlyData && <WeatherCard wdata={hourlyData.current} />} */}
        </div>
      </div>
    </div>
  );
};
