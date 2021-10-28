const UserModel = require('./user');
const AccessModel = require('./access');
const HikeModel = require('./hike');

class Models {
    constructor() {
        this.userModel = new UserModel().getModel();
        this.accessModel = new AccessModel().getModel();
        this.hikeModel = new HikeModel().getModel();
    }

}


module.exports = Models;