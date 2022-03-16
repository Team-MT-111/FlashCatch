import React from 'react'
import Flashcard from '../components/flashcard.jsx'
import { connect } from 'react-redux';
// const flashCards = flashcard array map

const mapStateToProps = (state) => ({
    flashcards: state.flashcards
})

const cards = []

const FlashcardsContainer = (props) => {
    console.log('flashcard container props:', props.flashcards.flashcards)
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


export default connect(mapStateToProps, null)(FlashcardsContainer)