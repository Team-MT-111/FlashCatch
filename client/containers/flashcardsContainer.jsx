import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Flashcard from '../components/flashcard.jsx'
import { connect } from 'react-redux';
import { fetchAddPokedollars } from '../reducers/userReducer.js';
// const flashCards = flashcard array map

const mapStateToProps = (state) => ({
    // user: state.user,
    user:state.user,
    flashcards: state.flashcards,
    isLogged: state.user.isAuthenticated
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
    const navigate = useNavigate();
    
    useEffect(() => {
        if(props.user.isAuthenticated !== true) {
            navigate('/login');
        }
    }, []);
  
    // console.log('flash', props.user);
    // for (let i = 0; i < props.results.length; i++){
    //     cards.push(
    //         <Flashcard
    //             question={props.results[i].question}
    //             answer={props.results[i].answer}
    //         />
    //     )
    // }

    return (
        <section id="flashcards-container">
            {/* {cards} */}
            <h2><p>Your Flashcards!</p></h2>
            {
                array2 || null
            }

        </section>
    )
}


export default connect(mapStateToProps, null)(FlashcardsContainer);
