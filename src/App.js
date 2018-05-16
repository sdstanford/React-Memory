import React, { Component } from "react";
import SelectCard from "./components/SelectCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreBar from "./components/ScoreBar";
import cards from "./cardInfo.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the friends json array
  state = {
    cards,
    score: 0,
    highScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCard = id => {
    this.state.cards.find((x, i) => {
      if (x.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.cards and render a Card component for each image
  render() {
    return (
      <Wrapper>
        {/* <ScoreBar /> */}
        <Title>Clicky Game!</Title>
        <ScoreBar score={this.state.score} highScore={this.state.highScore} />
        {this.state.cards.map(card => (
          <SelectCard
            clickCard={this.clickCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        {/* {this.state.cards.map(card => (
          <SelectCard
            clickCard={this.clickCard}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))} */}
      </Wrapper>
    );
  }
}

export default App;