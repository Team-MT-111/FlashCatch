import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// each flashcard is worth same level of pokedollars 
// upon reviewed, send post request (thunk function) to backend that updates 
export default function Flashcard(props) {

  // reminders
  // refactor question and answer to show data passed down from mapping over data in flashcardsContainer
  const { id, question, answer } = props;
    
  // isQuestion state used to determine whether to display question or answer
  const [isQuestion, setIsQuestion] = useState(true);

  const handleClick = () => {
      isQuestion ? setIsQuestion(false) : setIsQuestion(true);
  }

  if (isQuestion) { 
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              Question
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Display Question from props
              {/* {question} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              Answer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Display Answer from props
              {/* {answer} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}