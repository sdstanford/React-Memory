import React from "react";
import "./Title.css";

const Title = props => (

    <div className="jumbotron">
        <h1 className="title">{props.children}</h1>
        <h3 className="subtitle">Click on an image to earn points, but don't click on any more than once!</h3>
    </div>

);

export default Title;