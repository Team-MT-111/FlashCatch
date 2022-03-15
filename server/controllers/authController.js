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
         console.log('error occured in aurth.createUser, e');
         Team.findByIdAndDelete(info.id).exec()
           .then(() => console.log('pokdex deleted due to error'))
           .catch((e) => console.log('error occured in auth.createUser', e))
       });
    })
}

module.exports = auth;