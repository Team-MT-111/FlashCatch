const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('mongoose connected'));

const teamSchema = new mongoose.Schema({
  trainer: {
    name: String,
    portrait: String
  },
  pokemons: [{
    name: String,
    id: Number,
    picture: String
  }]
})

module.exports = mongoose.model('team', teamSchema);