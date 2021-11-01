const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class EventService extends Base {
    constructor({ event }) {
        super(event);
    }
}

module.exports = EventService;
