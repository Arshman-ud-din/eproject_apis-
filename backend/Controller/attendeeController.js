const Event = require('../models/Event')
const Attendee = require('../models/Attendee');
const Session = require('../models/Session');

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('sessions');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register for an event
const registerEvent = async (req, res) => {
  const { attendeeId, eventId } = req.body;
  try {
    const attendee = await Attendee.findById(attendeeId);
    if (!attendee) return res.status(404).json({ message: 'Attendee not found' });

    if (attendee.registeredEvents.includes(eventId)) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    attendee.registeredEvents.push(eventId);
    await attendee.save();
    res.status(200).json({ message: 'Event registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Bookmark a session
const bookmarkSession = async (req, res) => {
  const { attendeeId, sessionId } = req.body;
  try {
    const attendee = await Attendee.findById(attendeeId);
    if (!attendee) return res.status(404).json({ message: 'Attendee not found' });

    if (attendee.bookmarkedSessions.includes(sessionId)) {
      return res.status(400).json({ message: 'Session already bookmarked' });
    }

    attendee.bookmarkedSessions.push(sessionId);
    await attendee.save();
    res.status(200).json({ message: 'Session bookmarked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEvents, registerEvent, bookmarkSession };
