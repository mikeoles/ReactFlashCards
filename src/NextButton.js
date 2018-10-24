import React, { Component } from 'react';

export class NextButton extends Component {
    render(){
      return(
        <div id="nextButton">
          <button className="btn btn-primary float-left" onClick={this.props.onFlipClick}>Flip</button>
          <button className="btn btn-primary float-right" onClick={this.props.onNextClick}>Next</button>
        </div>
      );
    }
  }