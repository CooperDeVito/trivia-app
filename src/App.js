import React, { useState, useEffect } from "react";
import Question from './Components/Question';
import { Button, Typography, Grid, Paper } from '@material-ui/core';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";



const theme = createMuiTheme ({ 
  palette: { 
    type: 'light',

    primary: { 
      main: "#43A047"
    },

    secondary: {
      main: "#0288D1"
    }
  }
})

function getRandomInt(min,max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
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

  /*
  function showCorrect(questions) {
    const newAnswers = questions.incorrect_answers.map((answer) => (
      if (answer === questions.correct_answer) { 
        
      }
    ))
  }
  */ 
  //make state variable or array of the questions 
  //an array that says if its the right answer


  return (
    <ThemeProvider theme={theme}>
       <Paper> 
       <div>
      
      <h2>Trivia App </h2>
      {questions.map((question) => (
        <h1>{question.question}:
        <h1> {'\n'} </h1>
        {question.incorrect_answers.map((answer) => (
          <Button
          color = 'secondary'
          size = 'medium'
          variant = 'contained'
          type = 'button'
          className = 'btn toggle-btn'> 
          {answer} 
          </Button>
        ))}
          
        
        </h1>
      ))}

      
    </div>
      </Paper>
      </ThemeProvider>
    
  );
}

export default App;