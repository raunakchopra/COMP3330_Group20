const UserController = require('./user_controller');
const AccessController = require('./access_contoller');

class Controllers {
    constructor(services) {
        this.userController = new UserController({
            user: services.userService,
        });
        this.accessController = new AccessController({
            user: services.userService,
            access: services.sccessService,
        });
    }
}


module.exports = Controllers;
