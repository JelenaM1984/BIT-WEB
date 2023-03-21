import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";


export default function Header(){
    return(
    
  <nav>
  <div className="nav-wrapper">
    <a href="#!" className="center brand-logo">BIT PEOPLE</a>
    <ul className="right hide-on-med-and-down">
      <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
      <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
    </ul>
  </div>
</nav>
  )
}