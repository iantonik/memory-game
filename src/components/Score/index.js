import React from "react";

function Score(props) {
    return (
        <div className="row">
            Score: {props.score} | Top Score: {props.topScore}
        </div>


    );
}


export default Score;