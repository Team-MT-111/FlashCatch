const auth = {};
const pool = require('../models/userModel.js');
const Team = require('../models/teamModel.js');
const genshinApi = 'https://api.genshin.dev/characters';
const axios = require('axios');

function initializeTrainer(url) {
  return axios.get(url)
  .then((characters) => {
      const character = characters.data[Math.floor(Math.random() * characters.data.length)];
      return character;
  })
}

auth.createUser = async (req, res, next) => {
  const trainer = await initializeTrainer(genshinApi);
  Team.create({
    trainer: {
      name: trainer,
      portrait: `https://api.genshin.dev/characters/${trainer}/portrait`
    },
    pokemons: []
  })
    .then((info) => {
      const {username, password} = req.body;
      const queryString = 
      `
        INSERT INTO users (username, password, pokedex)
        VALUES ($1, $2, $3)
       `
      pool.query(queryString, [username, password, info.id])
       .then(() => next())
       .catch((e) => {
          console.log('error occured in aurth.createUser', e);
          Team.findByIdAndDelete(info.id).exec()
            .then(() => {
              console.log('pokdex deleted due to error');
              return res.status(500).json({error: true});
            })
           .catch((e) => console.log('error occured in auth.createUser', e))
       });
    });
};

auth.login = async (req, res, next) => {
  const {username, password} = req.body;
  const queryString = 
  `
    SELECT * FROM users
    WHERE $1 = username AND $2 = password
  `
  try {
    const user = await pool.query(queryString, [username, password]);
    if(user.rows[0].length === 0) return res.status(500).json({isAuthenticated: false});
    const teamInfo = await Team.findById(user.rows[0].pokedex);
    res.locals = {
      id: user.rows[0].id,
      username: user.rows[0].username,
      trainer: teamInfo.trainer.portrait,
      isAuthenticated: true,
      pokemons: teamInfo.pokemons,
      pokedollars: user.rows[0].pokedollars,
    }
    res.cookie('id', res.locals.id);
    return next();
  } catch(e) {
    res.locals = {
      isAuthenticated: false
    }
    return next();
  }
};

auth.logout = (req, res, next) => {

};

module.exports = auth;