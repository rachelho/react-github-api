import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

const Card = props => {
  console.log(props);
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
        <div>{props.bio}</div>
      </div>
    </div>
  )
}

const CardList = props => {
  return <div>{props.cards.map(card => <Card {...card} />)}</div>
}

class App extends Component {
  state = {
    cards: []
  }
  
  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitHub-React</h1>
        </header>
        <p className="App-intro">
          <div>
            <Form onSubmit={this.addNewCard} />
            <CardList cards={this.state.cards} />
        </div>
        </p>
      </div>
    );
  }
}

export default App;
