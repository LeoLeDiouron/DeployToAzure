const mongoose = require("mongoose");

const gdp_schema = new mongoose.Schema({country:String,gdp:String,rank:String});
const gdp_per_hab_schema = new mongoose.Schema({country:String,gdpPerHab:String,rank:String});
const population_schema = new mongoose.Schema({country:String,population:String,rank:String});

mongoose.model('gdp', gdp_schema);
mongoose.model('gdp_per_hab', gdp_per_hab_schema);
mongoose.model('population', population_schema);