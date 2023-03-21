import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Card.css"
import { useEffect,useState } from "react";


export default function CardID({content}){
    const gen = content?.userInfo?.gender;
    const [gender, setGender] = useState(true);
    useEffect(() => {
      gen === "male" ? setGender(false) : setGender(true);
    }, [gen]);

    return (  
<React.Fragment>
  <div className="col s12 m4 l3">
    <div className={`card small hoverable ${gender ? "red lighten-5" : ""}`}
      style={{
        width:"15rem",
        paddingLeft:"0px",
        paddingRight:"0px",
        margin:"0.4rem"
      }}>
      <div className="card-image">
      <img src={content.picture.large} alt="img"/>
        <span className="card-title">{content.name.first} {content.name.last}</span>
      </div>
      <div className="card-content">
        <p>   <span className="email">
                <i className="material-icons">email</i>
                {content.email}
              </span>
              <br />
              <span className="dateBirth">
                <i className="material-icons">cake</i>
                {content.dob.date}
              </span></p>
      </div>

    </div>
  </div>
</React.Fragment>
  
  );  
}  

