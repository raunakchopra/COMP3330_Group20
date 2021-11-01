const Models = require('../models/index');

const UserService = require('./user_service');
const AccessService = require('./access_service');
const HikeService = require('./hike_service');
const EventService = require('./event_Service');

class Services {
    constructor() {
        this.models = new Models();
        this.userService = new UserService({
            user: this.models.userModel,
            access: this.models.accessModel,
        });
        this.accessService = new AccessService({
            access: this.models.accessModel,
        });
        this.hikeService = new HikeService({
            hike: this.models.hikeModel,
        });
        this.eventService = new EventService({
            event: this.models.eventModel
        })
    }
}


module.exports = Services;
