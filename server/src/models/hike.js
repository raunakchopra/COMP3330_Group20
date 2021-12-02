const mongoose = require('mongoose');

class Hike {
    constructor() {
        const HikeSchema = new mongoose.Schema({
            route: String,
            brief: String,
            length: String,
            starting_point: String,
            finishing_point: String,
            duration: String,
            map: String,
            instructions: String,
            heightMap: String,
            difficulty: String
        }, { timestamps: true });

        this.model = mongoose.model('Hike', HikeSchema);
    }
    getModel() {
        return this.model;
    }
}

module.exports = Hike;
