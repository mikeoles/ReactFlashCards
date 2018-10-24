import React, { Component } from 'react';

export class FlashCards extends Component {
    render(){
      var showTerm = this.props.termFirst==="term";
      if(this.props.flipped) showTerm = !showTerm;

      var value = this.props.card.definition;
      if(showTerm){
        value = this.props.card.term;
      }

      return(
        <div id="FlashCards">
          {value}
        </div>
      );
    }
  }