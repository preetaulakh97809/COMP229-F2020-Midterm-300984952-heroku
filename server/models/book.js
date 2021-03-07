let mongoose = require('mongoose');

// create a model class
var Schema = mongoose.Schema;
var bookModel = new Schema(
  {
    name: {type: String, required: true},
    author: {type: String, required: true},
    published: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number}
  }
);

/**
 * add your code to 
 * create your model here
 * 
 */

module.exports = mongoose.model('Book', bookModel);