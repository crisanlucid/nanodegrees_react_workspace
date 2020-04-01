import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score';
import Game from './Game';

class App extends Component {
  //field declaration
  state = {
    noQuestions: 0,
    correctAnswers: 0,
  }

  handleAnswer = isCorrectAnswer => {
    console.log("do some actions")
   //increment correct answer
    if(isCorrectAnswer) {
      this.setState((prevState) => ({correctAnswers: prevState.correctAnswers + 1}));
    }
    
   //increment number of questions 
    this.setState((prevState)=>({noQuestions: prevState.noQuestions + 1}));
  }

  render() {
    const {noQuestions, correctAnswers} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          	<h2>Mental Math</h2>
            <Game handleAnswer={this.handleAnswer}/>
			<Score noCorrectAnswers={correctAnswers} noQuestions={noQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
