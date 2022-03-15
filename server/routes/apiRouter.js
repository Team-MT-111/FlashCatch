const express = require('express');

const router = express.Router();

router.post('/api/login', (req, res) => {
  res.sendStatus(200).json(res.locals)
});

router.post('/api/signup', (req, res) => {
  res.sendStatus(200).send('success')
});

router.get('/api/flashcards', )


module.exports = router;