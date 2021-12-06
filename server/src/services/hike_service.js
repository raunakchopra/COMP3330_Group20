const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class HikeService extends Base {
    constructor({ hike }) {
        super(hike);
    }

    addComment({ query, body }) {
        console.log(body)
        return this.model.findOneAndUpdate(
            query,
            { $push: {
                comments: body
            } },
            { new: true, runValidators: true }
        );
    }
}

module.exports = HikeService;
