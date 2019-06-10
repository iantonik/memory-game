import React from "react";
import "./style.css";

function Main(props) {
  return (

    <div className="container" >{props.children}</div>

  );
}

export default Main;