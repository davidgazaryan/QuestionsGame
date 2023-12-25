import React from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './questions.json';
import {Questions} from './type';
import {useState} from 'react';
import StatBar from './components/statbar';
import QuestionComp from './components/question';
import Reset from './components/Reset';


function App(){
  const allQuestions = questions as Questions;
  const [currentQuestionIdx,setCurrentQuestionIdx] = useState(0);
  const [correctAnswers,setCorrectAnswers] = useState(0);
  const[incorrectAnswers,setIncorrectAnswers] = useState(0);
  const [Advance,setAdvance] = useState(false);

  const advance = () =>{
    setAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  }

  const onSubmit = (correct:boolean) => {
    if (correct) {
        setCorrectAnswers(correctAnswers+1);
    }
    else {
        setIncorrectAnswers(incorrectAnswers+1);
    }

    setAdvance(true);

  }

  const reset = () => {
    setCurrentQuestionIdx(0);
    setIncorrectAnswers(0);
    setCorrectAnswers(0);
    setAdvance(false);

  }

  if(currentQuestionIdx >= allQuestions.questions.length){
   return (
    <Reset totalQuestions={allQuestions.questions.length} correctQuestions={correctAnswers} onPress={reset}/>)

}
  return (


    <div className="App">
        <StatBar currentQuestion={currentQuestionIdx + 1} correct={correctAnswers} incorrect={incorrectAnswers}totalQuestions={allQuestions.questions.length}/>
        <QuestionComp question={allQuestions.questions[currentQuestionIdx]}
        onSubmit= {onSubmit}/>

        {Advance && <button onClick={advance}> Next Question.. </button>}
    </div>
  );
}


export default App;
