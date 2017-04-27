var mongoose = require('mongoose');
mongoose.connect('mongodb://wk6:wk6@ds155080.mlab.com:55080/wk6test');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  schedule  : String,
  firstname : String,
  lastname  : String
});
module.exports = mongoose.model('Person', personSchema);
