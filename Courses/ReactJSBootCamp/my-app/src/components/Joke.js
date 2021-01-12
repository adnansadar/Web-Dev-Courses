import React from "react";

function Joke(props) {
  return (
    <div>
      <h2 style={{ display: props.question ? "block" : "none" }}>
        {props.question}
      </h2>
      <p style={{ color: !props.question && "grey" }}>{props.punchline}</p>
    </div>
  );
}

export default Joke;
