import React from "react";

function Score(props) {
    return (
        <div className="row">
            <h3 className="col-12 text-center font-italic text-info">Click on each picture only once. Clicking twice will reset your game.</h3>

            <h2 className="col-6">
            Score: {props.score} | Top Score: {props.topScore}
            </h2>
            <h2 className="col-6 text-right" >
                {props.choiceStatus}
            </h2>
            
        </div>


    );
}


export default Score;