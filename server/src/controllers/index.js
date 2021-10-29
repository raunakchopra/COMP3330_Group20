const UserController = require('./user_controller');
const AccessController = require('./access_contoller');
const HikeController = require('./hike_controller');

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
        })
    }
}


module.exports = Controllers;
