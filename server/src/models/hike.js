const mongoose = require('mongoose');

class Hike {
    constructor() {
        const HikeSchema = new mongoose.Schema({
            route: String,
            brief: String,
            length: String,
            startingPoint: String,
            finishingPoint: String,
            image: String,
            duration: String,
            map: String,
            instructions: String,
            heightMap: String,
            difficulty: String,
            comments: [{
                user: String,
                text: String
            }]
        }, { timestamps: true });

        this.model = mongoose.model('Hike', HikeSchema);
    }
    getModel() {
        return this.model;
    }
}

module.exports = Hike;
