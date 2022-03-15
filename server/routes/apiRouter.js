const express = require('express');

const router = express.Router();

const team = require('../models/teamModel.js');
const user = require('../models/userModel.js');

const authController = require('../controllers/authController.js');

router.post('/login', (req, res) => {
  res.sendStatus(200).json(res.locals)
});

router.post('/signup', authController.createUser, (req, res) => {
  res.sendStatus(200).send('success')
});

router.get('/flashcards', (req, res) => {

});

router.post('/flashcards', (req, res) => {

})

router.get('/myFlashcards', (req, res) => {

});

router.post('/gacha', (req, res) => {
    
});





module.exports = router;