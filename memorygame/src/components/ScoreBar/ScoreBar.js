import React from "react";
import "./ScoreBar.css";

const ScoreBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <h3 className="gameName navbar-left">Clicky Game</h3>
        <h3 className="currentGuess navbar-center">Click an image to begin!</h3>
        <h3 className="totalScore navbar-right">Score: 0 | Top Score: 0</h3>
      </div>
    </div>
  </nav>
);

export default ScoreBar;