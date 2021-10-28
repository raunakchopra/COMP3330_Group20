const userRouter = require('./user_router');
const accessRouter = require('./access_router');

class Routers {
    constructor(controllers, auth) {
        this.userRouter = userRouter(controllers.userController, auth);
        this.accessRouter = accessRouter(
            controllers.accessController,
            auth
        );
    }
}

module.exports = Routers;
