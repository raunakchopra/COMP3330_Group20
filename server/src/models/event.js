const mongoose = require('mongoose');

class Event {
    constructor() {
        const EventSchema = new mongoose.Schema({
            name: String,
            hike: { type: mongoose.Schema.Types.ObjectId, ref: 'hike' },
            organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            date: String,
            information: String,
            attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
        }, { timestamps: true });

        this.model = mongoose.model('Hike', HikeSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Hike;
