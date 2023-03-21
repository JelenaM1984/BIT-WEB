import React from "react";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardID from "../CARD/Card";

export default function People() {
    const url = "https://randomuser.me/api/?results=15";
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setUser(json.results);
          console.log('res', json)
        });
    }, []);
  
    return (
  
      <div className="container">
        <div className="row justify-content-center">
          <div >
          {user.length > 0 && (
            <> 
     
            {user.map((item,index)=>{
                return <CardID key={index} content={item}/>
            }
            )}

              </>
            )}
          </div>
        </div>
      </div>)
}