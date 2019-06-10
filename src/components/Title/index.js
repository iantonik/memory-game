import React from "react";
import "./style.css";

function Title(props) {
  return (

  <nav className="navbar fixed-top navbar-light bg-light">
    <p className="navbar-brand" >{props.children}</p>
  </nav>
  
  );
}

export default Title;


