import React from "react";
import "./SelectCard.css";

const SelectCard = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.clickCard(props.id)}>
      <img alt="Image of a cat" src={props.image} height="250px" />
    </div>
  </div>
);

export default SelectCard;