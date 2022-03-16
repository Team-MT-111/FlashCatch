import React from 'react'
import Flashcard from '../components/flashcard.jsx'
// const flashCards = flashcard array map

const mapStateToProps = (state) => ({
    // results: state.something
})

const cards = []

const FlashcardsContainer = (props) => {
    
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


export default FlashcardsContainer