import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { connect } from 'react-redux';
import { fetchAddPokedollars } from '../reducers/userReducer.js';

import '../styles/flashcard.scss';

 
// upon reviewed, send post request (thunk function) to backend that updates pokedollar balance 
// mapDispatchToProps
// 
const mapStateToProps = (state) => ({
  // user: state.user,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
      addPokedollars: (pokedollars) => {
          // console.log('userid in getMyFlashcards: ', id);
          const thunkFunc = fetchAddPokedollars(pokedollars);
          dispatch(thunkFunc);
      }
    });

function Flashcard(props) {

  // reminders
  // refactor question and answer to show data passed down from mapping over data in flashcardsContainer
  // console.log('props in flashcard', props)
  const { id, question, answer } = props;
  // console.log('flashcard props: ', props);  
  // isQuestion state used to determine whether to display question or answer
  const [isQuestion, setIsQuestion] = useState(true);

  const pokedollarClick = (event) => {
    event.preventDefault();
    const currentPokedollars = {
      pokedollars: props.user.pokedollars
    }
    props.addPokedollars(currentPokedollars);
    // console.log(props.user.pokedollars)
  }

  const handleClick = () => {
      isQuestion ? setIsQuestion(false) : setIsQuestion(true);
  }

  if (isQuestion) { 
    return (
      <Card sx={{ maxWidth: 345 }} id='flashcards'>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              Question
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {/* Display Question from props */}
              {question}
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
              {/* Display Answer from props */}
              {answer}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* dispatch action from button click. Pass dispatch action creator in to the Card */}
          <Button size="small" color="primary" onClick={pokedollarClick}>
            Mark as Reviewed
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flashcard);