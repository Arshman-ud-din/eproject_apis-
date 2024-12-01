const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  speaker: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Session', sessionSchema);
