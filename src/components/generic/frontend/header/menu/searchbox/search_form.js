import React from 'react';
import './search.css';

const SearchBox = () => {
  return (
    <div className="">
      <input
        className=""
        type="search"
        placeholder="search Taxi"
        onChange={() => attachSearchEvents()}
      />
    </div>
  );
};

export default SearchBox;
