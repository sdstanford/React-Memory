import React, { Component } from "react";
import SelectCard from "./components/SelectCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreBar from "./components/ScoreBar";
import cards from "./cardInfo.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  clickCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <ScoreBar />
        <Title>Clicky Game!</Title>
        {this.state.cards.map(card => (
          <SelectCard
            clickCard={this.clickCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;