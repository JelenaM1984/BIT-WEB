import React from 'react'
import SearchResult from './SearchResult'

function SeearchList({results}) {
  return (
    <div className='results-list'>
       { results.map((index,results)=>{
        return <SearchResult result={index} key={results}/>
       })}
        
    </div>
    
  )
}

export default SeearchList