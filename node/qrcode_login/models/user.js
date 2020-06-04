const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  password: String,
  // token可以在client端 localStorage.setItem()
  token: String
})


module.exports = mongoose.model('User', UserSchema);
