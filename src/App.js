import React, { useState, useEffect } from "react";
import Question from './Components/Question';

function getRandomInt(min,max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple")
      .then((res) => res.json())
      .then((res) => {
        let tempQuestions = res.results; //temporarily hold the data 
        tempQuestions.forEach((questions) => (
          questions.incorrect_answers.splice(getRandomInt(0, questions.incorrect_answers.length), 0, questions.correct_answer) //insert correct answer at random spot
        ));
        //tempQuestions['all_answers'] = answers; //how do you set a field
        setQuestions(tempQuestions);
        
      });
  }, []);

  

  


 
  //make state variable or array of the questions 
  //an array that says if its the right answer


  return (
    <div>
      <h1> {getRandomInt(0,4)} </h1>
      <h2>Trivia </h2>
      {questions.map((question) => (
        <h1>{question.question}: 
        <h5>
        {question.incorrect_answers}
        </h5>
         </h1>

      ))}

      
    </div>
  );
}

export default App;