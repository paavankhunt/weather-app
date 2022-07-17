import React from 'react';
import CurrentWeather from './components/modules/currentWeather';
import { SearchBoxContext } from './context/searchBoxContext';

function App() {
  return (
    <React.Fragment>
      <SearchBoxContext>
        <CurrentWeather />
      </SearchBoxContext>
    </React.Fragment>
  );
}

export default App;
