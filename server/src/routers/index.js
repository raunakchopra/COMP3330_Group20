const userRouter = require('./user_router');
const accessRouter = require('./access_router');
const hikeRouter = require('./hike_router');
const eventRouter = require('./event_router');

class Routers {
    constructor(controllers, auth) {
        this.userRouter = userRouter(controllers.userController, auth);
        this.accessRouter = accessRouter(
            controllers.accessController,
            auth
        );
        this.hikeRouter = hikeRouter(
            controllers.hikeController,
            auth
        );
        this.eventRouter = eventRouter(
            controllers.eventController,
            auth
        )
    }
}

module.exports = Routers;
