import React, {Component} from 'react';

class Game extends Component {
  constructor(props){
  	super(props);
    //create a new question
    const question= this.createNewQuestion();
    this.state = {...question};
  }
  
  createNewQuestion = () => {
  	const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    
    return {value1, value2, value3, proposedAnswer};
  }

  handleClick = e => {
   	e.preventDefault(); //stop click propagation
    console.log(e.target.value);
    
    //generate new question
    const newQuestion = this.createNewQuestion();
    this.setState(newQuestion);
    
    //validate answer
    const isCorrectAnswer = this.checkAnswer(e.target.value);
    this.props.handleAnswer(isCorrectAnswer);
  }


  checkAnswer = checkAnswer => {
  	const { value1, value2 , value3, proposedAnswer} = this.state;
    const correctAnswer = value1 + value2 + value3;
    
    return checkAnswer === 'true' 
       ? correctAnswer === proposedAnswer
       : correctAnswer !== proposedAnswer;
  }

  render() {
    const {value1, value2, value3, proposedAnswer} = this.state;
    return (
    	<div>
      		<div className="equation">
            	<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          	</div>
          	<button onClick={this.handleClick} value='true'>True</button>
          	<button onClick={this.handleClick} value='false'>False</button>
      	</div>
    )
  }
}

export default Game;