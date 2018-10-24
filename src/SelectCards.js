import React, { Component } from 'react';

export class SelectCards extends Component {
  onFirstChanged(){

  }
  
  render() {
    return (
      <div id="SelectCards">
        <input checked={this.props.termFirst === "term"} type="radio" name="site_name" value="term" onChange={this.props.onFirstChanged} />
        Term First
        <input style={{marginLeft: 10}} checked={this.props.termFirst === "definition"} type="radio" name="site_name" value="definition" onChange={this.props.onFirstChanged} />
        Definition First  
        <div className="float-right" id="location">{this.props.cardNumber || "0"}/{this.props.totalCards || "0"}</div>      
      </div>
    );
  }
}