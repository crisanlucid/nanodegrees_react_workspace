import React from 'react';


const Score = ({noCorrectAnswers, noQuestions}) => {
  return (
    //without this '(', JS will automatically put a ';' after 'return'
    <p className="text">
      Your Score: {noCorrectAnswers}/{noQuestions}
    </p>
  )
}

export default Score;