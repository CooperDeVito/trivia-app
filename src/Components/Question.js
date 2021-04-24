import React, { useState, useEffect } from "react";
import { Button, borders, Typography, Grid, Paper } from '@material-ui/core';
import { MuiThemeProvider, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import he from 'he';


const theme = createMuiTheme ({ 
    palette: { 
        type: 'dark',

      primary: { 
        main: "#43A047" // a green
      },
  
      secondary: {
        main: "#e53935" // a red (standard)
      },

      success: { 
          main: "#03A9F4" // a blue
      }
    }
  })

function Question(props) { 

    const[isAnswered, setIsAnswered] = useState(false);

    function handleClick () { 
        setIsAnswered(true);
    }

    function correctAnswer (answer) { 
        if (answer === props.question.correct_answer) { 
            return 'primary';
        }
        else { 
            return 'secondary';
        }
    }

    return ( 
        <MuiThemeProvider theme={theme}>
    <CssBaseline />
            <Paper>
        <h1>{props.question.question}:
        <h1> {'\n'} </h1>
        {props.question.incorrect_answers.map((answer) => (
          <Button
          color = {isAnswered ? correctAnswer(answer) : 'success' }
          size = 'medium'
          variant = 'contained'
          type = 'button'
          className = 'btn toggle-btn'
          onClick = {handleClick} > 
          
          {answer} 
          </Button>
        ))}
          
        
        </h1>
            </Paper>
        </MuiThemeProvider>
        

            

        
    )

}

export default Question;
