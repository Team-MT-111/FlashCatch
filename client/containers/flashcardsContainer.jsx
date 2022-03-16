import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import Flashcard from '../components/flashcard.jsx'
// const flashCards = flashcard array map

const mapStateToProps = (state) => ({
    user: state.user
})

const cards = []

const FlashcardsContainer = (props) => {
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

    return (
        <section id="flashcards-container">
            {/* {cards} */}


            <p>this is where all the flashcards will go</p>
            
            <p>A flashcard question and answer</p>
            <Flashcard />
            {/* render flashcard and pass down on props: id, question, and answer  */}


        </section>
    )
}


export default connect(mapStateToProps, null)(FlashcardsContainer);