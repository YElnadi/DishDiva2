import React from 'react';
import './SearchResultList.css'

const SearchResultList = ({results}) => {
  return (
    <div >
     { results.map((result, id)=>{
        return <div className='search-results-list' key={id} onClick={(e)=>alert(`You have clicked on ${result.title}`)}>{result.title}</div>
     })}

    </div>
  );
}

export default SearchResultList;
