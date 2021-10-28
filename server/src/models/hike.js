const mongoose = require('mongoose');

class Hike {
    constructor() {
        const HikeSchema = new mongoose.Schema({
            name: String,
            region: String,
            length: String,
            starting_point: String,
            finishing_point: String,
            duration: String,
            information: String,
            difficulty: String
        }, { timestamps: true });

        this.model = mongoose.model('Hike', HikeSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Hike;
