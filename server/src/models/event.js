const mongoose = require('mongoose');

class Event {
    constructor() {
        const EventSchema = new mongoose.Schema({
            name: String,
            hike: String,
            organizer: String,
            date: String,
            information: String,
            attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
        }, { timestamps: true });

        this.model = mongoose.model('Event', EventSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Event;
