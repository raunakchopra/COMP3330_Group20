const UserModel = require('./user');
const AccessModel = require('./access');
const HikeModel = require('./hike');
const EventModel = require('./event');

class Models {
    constructor() {
        this.userModel = new UserModel().getModel();
        this.accessModel = new AccessModel().getModel();
        this.hikeModel = new HikeModel().getModel();
        this.eventModel = new EventModel().getModel();
    }

}


module.exports = Models;