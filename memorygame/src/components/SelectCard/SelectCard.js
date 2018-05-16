import React from "react";
import "./SelectCard.css";

const SelectCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt="Image of a cat" src={props.image} height="250px" />
    </div>
    <div className="content"></div>
    <span onClick={() => props.clickCard(props.id)} className="remove">
    </span>
  </div>
);

export default SelectCard;