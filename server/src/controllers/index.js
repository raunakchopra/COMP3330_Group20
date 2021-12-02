const UserController = require('./user_controller');
const AccessController = require('./access_contoller');
const HikeController = require('./hike_controller');
const EventController = require('./event_controller');

class Controllers {
    constructor(services) {
        this.userController = new UserController({
            user: services.userService,
        });
        this.accessController = new AccessController({
            user: services.userService,
            access: services.sccessService,
        });
        this.hikeController = new HikeController({
            hike: services.hikeService,
        });
        this.eventController = new EventController({
            event: services.eventService,
        });
    }
}


module.exports = Controllers;
