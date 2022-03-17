<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
>>>>>>> John/frontEnd
import Flashcard from '../components/flashcard.jsx'
import { connect } from 'react-redux';
// import e from 'express';
import { fetchAddPokedollars } from '../reducers/userReducer.js';
// const flashCards = flashcard array map

const mapStateToProps = (state) => ({
<<<<<<< HEAD
    // user: state.user,
    user:state.user,
    flashcards: state.flashcards,
    isLogged: state.user.isAuthenticated
=======
    user: state.user
>>>>>>> John/frontEnd
})

// const mapDispatchToProps = dispatch => ({
//     addPokedollars: (pokedollars) => {
//         // console.log('userid in getMyFlashcards: ', id);
//         const thunkFunc = fetchAddPokedollars(pokedollars);
//         dispatch(thunkFunc);
//     }
//   });

// const cards = []

const FlashcardsContainer = (props) => {
<<<<<<< HEAD
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch('/api/myflashcards/' + props.user.id)
      .then(res => res.json())
      .then(data => {
          setArray(data);
      });
    }, []);

    const array2 = array?.map(el => {
        console.log('el', el);
        return (<Flashcard id={el.id} question={el.question} answer={el.answer} />)
       })
    // console.log('array after map', array2);
=======
    const navigate = useNavigate();
    
    useEffect(() => {
        if(props.user.isAuthenticated !== true) {
            navigate('/login');
        }
    }, []);
  
    console.log('flash', props.user);
    // for (let i = 0; i < props.results.length; i++){
    //     cards.push(
    //         <Flashcard
    //             question={props.results[i].question}
    //             answer={props.results[i].answer}
    //         />
    //     )
    // }

>>>>>>> John/frontEnd
    return (
        <section id="flashcards-container">
            {/* {cards} */}

            <p>this is where all the flashcards will go</p>
            
            <p>A flashcard question and answer</p>
            {
                array2 || null
            }

        </section>
    )
}


<<<<<<< HEAD
export default connect(mapStateToProps, null)(FlashcardsContainer)
=======
export default connect(mapStateToProps, null)(FlashcardsContainer);
>>>>>>> John/frontEnd
