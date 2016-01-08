//bring mongoose into this file
var mongoose = require('mongoose');

//design a schema for storing recipes
var recipeSchema = new mongoose.Schema({
	image: String,
	url: String
});

//create a model for recipe using the recipe schema
var Recipe = mongoose.model('Recipe', recipeSchema);

//export it for use elsewhere
module.exports = Recipe;