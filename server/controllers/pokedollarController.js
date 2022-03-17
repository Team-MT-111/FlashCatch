const pokedollar = {};
const pool = require('../models/userModel.js');

pokedollar.add = async (req, res, next) => {
  const { id } = req.cookies;
  let pokedollars = Number(req.body.pokedollars);
  pokedollars++;
  const queryString =
  `
  UPDATE users
  SET pokedollars = $1
  WHERE id = $2
  `;
  try {
    const result = await pool.query(queryString, [pokedollars, id]);
    res.locals = {pokedollars};
    return next();
  } catch(e) {
    console.log('error occured in pokedollar.add', e);
    return res.status(500).json({error: true});
  }
};

pokedollar.subtract = async (req, res, next) => {
  const { id } = req.cookies;
  console.log(id)
  let pokedollars = Number(req.body.pokedollars);
  pokedollars -= 5;
  res.locals.pokedollars = pokedollars;
  const queryString =
  `
  UPDATE users
  SET pokedollars = $1
  WHERE id = $2
  `;
  try {
    const result = await pool.query(queryString, [pokedollars, id]);
    return next();
  } catch(e) {
    console.log('error occured in pokedollar.add', e);
    return res.status(500).json({error: true});
  }
};

module.exports = pokedollar;