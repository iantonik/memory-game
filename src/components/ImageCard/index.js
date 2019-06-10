import React from "react";
import "./style.css";

function ImageCard(props) {
  return (

    <div className="card card-block" >
      <img alt={props.name} key={props.id} src={props.image} onClick={((e) => props.handleChoice(e, props))}/>
    </div>

  );
}

export default ImageCard;
