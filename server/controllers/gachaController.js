const gacha = {};
const pool = require('../models/userModel.js')
const Team = require('../models/teamModel.js');
const axios = require('axios');
const pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=50000';

let pokemonCache = null; 

function rollRandomPokemon(allPokemons) {
  return allPokemons[Math.floor(Math.random() * allPokemons.length)];
}

gacha.rollOnce = async (req, res, next) => {
  const {id} = req.body;
  const pokemons = JSON.parse(req.body.pokemons);
  if(!pokemonCache) pokemonCache = await axios.get(pokemonApi);
  const reward = rollRandomPokemon(pokemonCache.data.results);
  pokemons.push(reward);
  const queryString = 
  `
  SELECT pokedex FROM users
  WHERE id = $1
  `
  pool.query(queryString, [id])
    .then((data) => {
      const objectId = data.rows[0].pokedex;
      Team.findByIdAndUpdate(objectId, {pokemons}, {new: true}, (err, result) => {
        console.log(result)
      })
    });

};



module.exports = gacha;