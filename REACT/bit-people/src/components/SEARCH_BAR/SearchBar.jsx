import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function SearcBox({setResults}){
    const url='https://randomuser.me/api/?results=15';
    const [value,setValue]=useState("");
    const fetchData=(value)=>{
    fetch(url)
    .then (response=>response.json())
    .then((json)=>{
        const results=json.filter((user)=>{
            return (value && user&& user.name&& user.name.toLowerCase().includes(value));
           
           });
         setResults(results);
    }
    )
}
const hendleChange=(value)=>{
setValue(value);
fetchData(value);
}
    
return(
<div className="inputWrapper">
<FontAwesomeIcon icon={faMagnifyingGlass} />
<input type="text" placeholder="Search users..." value={value} onChange={(e)=>hendleChange(e.target.value)}/>
</div>
    )}
