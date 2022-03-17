const flashcards = {};
const { Pool } = require('pg/lib');
const pool = require('../models/userModel.js');

flashcards.getAllFlashcards = (req, res, next) => {
  const queryString = 
  `
  SELECT * FROM flashcards
  `;
  pool.query(queryString, (err, result) => {
    res.locals = result.rows;
    return next();
  });
}

flashcards.addFlashcards = (req, res, next) => {
  const { question, answer} = req.body;
  const id = req.cookies.id;
  const queryString = 
  `
  INSERT INTO flashcards(question, answer, user_id)
  VALUES ($1, $2, $3)
  `
  pool.query(queryString, [question, answer, id], (err, result) => {
      if (err) { 
        console.log("an error occured in addFlashcards", err);
        return res.status(500).json({error: true});
      } 
      return next();
  });
};

flashcards.getMyFlashcards = (req, res, next) => {
  const userId = req.params.id;
  const queryString = 
  `
  SELECT * FROM flashcards
  WHERE $1 = flashcards.user_id
  `;

  pool.query(queryString, [userId])
    .then((result) => {
      // console.log('result:', result)
      res.locals = result.rows;
      return next();
    })
    .catch(() => {
      console.log('error occured during getMyFlashcards');
      return res.status(500).json({error: true});
    });

}



module.exports = flashcards;