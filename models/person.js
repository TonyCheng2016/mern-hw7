var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds161190.mlab.com:61190/wk7dbtest');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  schedule  : String,
  // firstname : String,
  // lastname  : String
  Name: String,
  Email: String,
  age: Number,
  note: String
});
module.exports = mongoose.model('Person', personSchema);
