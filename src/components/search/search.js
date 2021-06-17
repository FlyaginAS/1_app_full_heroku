import React from 'react';
import './search.scss';
import { ReactComponent as SearchLogo } from './img/search.svg';

const Search = () => {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="e.g. Helsinki"
      />
      <button className="search__button">
        <SearchLogo className="search__icon" />
      </button>
    </div>
  );
};

export default Search;
