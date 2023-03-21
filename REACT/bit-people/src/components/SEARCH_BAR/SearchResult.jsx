import React from 'react'

function SearchResult({result}) {
  return (
    <div className='search-results' >{result.name}</div>
  )
}

export default SearchResult