import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
        <h3 className="totalScore">Score: {props.score}  |  Top Score: {props.highScore}</h3>
    </div>
  </nav>
);

export default ScoreBar;