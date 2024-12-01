const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
});

module.exports = mongoose.model('Event', eventSchema);
