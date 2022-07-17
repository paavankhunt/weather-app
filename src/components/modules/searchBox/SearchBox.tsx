import React, { useState, useContext } from 'react';
import { SearchC } from '../../../context/searchBoxContext/SearchBoxContext';

export const SearchBox = () => {
  const [searchV, setsearchV] = useState('');
  const { addsearch } = useContext(SearchC);
  const handlesubmit = (e: any) => {
    e.preventDefault();
    addsearch(searchV);
    setsearchV('');
  };
  return (
    <div>
      <form onSubmit={handlesubmit} className="d-flex">
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          onChange={(e) => setsearchV(e.target.value)}
          placeholder="enter city name"
          value={searchV}
        />
        <button type="submit" className="btn-success">
          Search
        </button>
      </form>
    </div>
  );
};
