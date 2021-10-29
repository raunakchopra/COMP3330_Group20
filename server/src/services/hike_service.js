const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class HikeService extends Base {
    constructor({ hike }) {
        super(hike);
    }
}

module.exports = HikeService;
