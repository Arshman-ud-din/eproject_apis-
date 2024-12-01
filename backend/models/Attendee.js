const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  bookmarkedSessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
});

module.exports = mongoose.model('Attendee', attendeeSchema);
