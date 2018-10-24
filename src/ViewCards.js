import React, { Component } from 'react';
import {FlashCards} from './FlashCards.js';
import {NextButton} from './NextButton.js';
import {SelectCards} from './SelectCards.js';

export class ViewCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardIndex: 0,
            termFirst: "term",
            flipped: false
        };
        this.handleFlip = this.handleFlip.bind(this);
        this.handleFirstSelected = this.handleFirstSelected.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleFlip(e){
        this.setState({
            flipped: !this.state.flipped
        });
    }

    handleNext(e){
        this.setState({
            cardIndex: (this.state.cardIndex+1)%this.props.allCards.length
        });
    }

    handleFirstSelected(e){
        this.setState({
            termFirst: e.currentTarget.value
        });
    }

    render(){
      const card = this.props.allCards[this.state.cardIndex];
      return(
        <div id="ViewCards">
          <SelectCards termFirst={this.state.termFirst} onFirstChanged={this.handleFirstSelected} cardNumber={this.state.cardIndex+1} totalCards={this.props.allCards.length}></SelectCards>
          <FlashCards card={card} termFirst={this.state.termFirst} flipped={this.state.flipped}></FlashCards>
          <NextButton onFlipClick={this.handleFlip} onNextClick={this.handleNext}></NextButton>
        </div>
      );
    }
  }
  