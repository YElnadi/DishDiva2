import React from 'react';
import './SearchResultList.css'

const SearchResultList = ({results}) => {
  return (
    <div >
     { results.map((result, id)=>{
        return <div key={id}>{result.name}</div>
     })}

    </div>
  );
}

export default SearchResultList;
