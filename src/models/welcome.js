const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
});
const Welcome = mongoose.model('Welcome', schema);

export default Welcome;
