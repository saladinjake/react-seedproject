import React from 'react';


const SearchBox = ({ attachEvents }) => {
  return (
    <div className=''>
      <input
        className=''
        type='search'
        placeholder='search Taxi'
        onChange={() => attachEvents()}
      />
    </div>
  );
}

export { SearchBox };