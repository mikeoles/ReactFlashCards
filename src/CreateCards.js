import React, { Component } from 'react';

export class CreateCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
      definition: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.updateDefinition = this.updateDefinition.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.submitNewCard(this.state.term,this.state.definition);
  }

  updateTerm(e){
    this.setState({
      term: e.target.value
    })
  }

  updateDefinition(e){
    this.setState({
      definition: e.target.value
    })
  }

  render(){
    return ( 
      <div id="CreateCards">
        <form onSubmit={this.handleFormSubmit}>
          <div>Term</div>
          <input id="UpdateTerm" type="text" onChange={this.updateTerm}></input>
          <div>Definition</div>
          <textarea id="UpdateDefinition" type="text" onChange={this.updateDefinition}></textarea>
          <br></br>
          <input className="btn btn-primary" type="submit" value="Add"></input>
        </form>
      </div>
    );
  }
}