import React, { Component } from 'react';
import {CreateCards} from './CreateCards.js';
import {ViewCards} from './ViewCards.js';
import './App.css';

var FLASHCARDDATA = [
  {term: "All-Or-None Principle", definition: "All muscle fibers contract and produce force at the same time. Stronger action potential cannot cause of stronger contract - the muscle fibers of a motor unit either all contract or the don't"},
  {term: "Selective Recruitment", definition: "Despite the size principle, when performing fast explosive/agility movements, fast twitch fibers may be recruited first because there wont be enough time to recruit slow twitch first."},
  {term: "Size Principle", definition: "Motor units are recruited in order according to their recruitment threshold and firing rates.  Low threshold recurited in low fatigue, high in high fatigue"},
  {term: "Muscle Buffering Capacity (MBC)", definition: "The ability to regulate H+ ions during high-intensity exercise"},
  {term: "Specificity", definition: "Training is the most effective when resistance exercises are similar to the sport activity in which improvement is sought."},
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        FlashCards: FLASHCARDDATA
    }
    this.handleCardSubmit = this.handleCardSubmit.bind(this);
  }
  
  handleCardSubmit(newTerm,newDefinition){
    let state = {
      term: newTerm,
      definition: newDefinition
    }
    var updatedCards = this.state.FlashCards;
    updatedCards.push(state);
    this.setState({
      FlashCards: updatedCards
    });
  }

  render() {
    return (
      <div>
        <CreateCards submitNewCard={this.handleCardSubmit}></CreateCards>
        <ViewCards allCards={this.state.FlashCards}></ViewCards>
      </div>
    );
  }
}

export default App;
