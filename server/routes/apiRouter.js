const express = require('express');

const router = express.Router();

const team = require('../models/teamModel.js');
const user = require('../models/userModel.js');

const authController = require('../controllers/authController.js');
const flashcardController = require('../controllers/flashcardController.js');
const pokedollarController = require('../controllers/pokedollarController.js');
const gachaController = require('../controllers/gachaController.js');

router.post('/login', authController.login, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/signup', authController.createUser, (req, res) => {
  return res.status(200).send('success');
});

router.get('/flashcards', flashcardController.getAllFlashcards, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/flashcards', flashcardController.addFlashcards, (req, res) => {
  return res.status(200).send('success');
});

router.get('/myflashcards/:id', flashcardController.getMyFlashcards, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/pokedollar', pokedollarController.add, (req, res) => {
  return res.status(200).json(res.locals);
});

router.patch('/gacha', pokedollarController.subtract, gachaController.rollOnce, (req, res) => {
  return res.status(200).json(res.locals);
});





module.exports = router;