const gacha = {};
const pool = require('../models/userModel.js')
const Team = require('../models/teamModel.js');
const axios = require('axios');
const pokemonApi = 'https://pokeapi.co/api/v2/pokemon?limit=898';

let pokemonCache = null; 

function rollRandomPokemon(allPokemons, pokemons) {
  const id = Math.floor(Math.random() * allPokemons.length + 1);
  let notChecked = true;
  while(notChecked) {
    notChecked = false;
    for(let i = 0; i < pokemons.length; i++) {
      if(pokemons.id === id) {
        notChecked = true;
      }
    }
  }
  const pokemon = {
    name: allPokemons[id - 1].name,
    id: id,
    picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }
  return pokemon;
}

gacha.rollOnce = async (req, res, next) => {
  const {id} = req.cookies;
  const pokemons = req.body.pokemons;
  if(!pokemonCache) pokemonCache = await axios.get(pokemonApi);
  const reward = rollRandomPokemon(pokemonCache.data.results, pokemons);
  res.locals.pokemons = reward;
  pokemons.push(reward);
  pokemons.sort((a, b) => a.id - b.id)
  const queryString = 
  `
  SELECT pokedex FROM users
  WHERE id = $1
  `
  pool.query(queryString, [id])
    .then((data) => {
      const objectId = data.rows[0].pokedex;
      Team.findByIdAndUpdate(objectId, {pokemons}, {new: true}, (err, result) => {
        return next();
      })
    });

};



module.exports = gacha;