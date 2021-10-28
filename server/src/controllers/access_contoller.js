const { validationResult } = require('express-validator');

class AccessController {
    constructor({ user, access }) {
        this.userService = user;
        this.accessService = access;
    }

    async login(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const find = {};
        if (insert.email) {
            find.email = insert.email;
        }
        let user;
        let token;
        if (allowed) {
            try {
                user = await this.userService.login({
                    query: find,
                    password: insert.password
                });
            } catch (e) {
                return next(e);
            }
            try {
                token = await this.accessService.createToken({
                    userId: user._id,
                    user,
                });
            } catch (e) {
                return next(e);
            }
        }
        return res.json({ user, token });
    }
}

module.exports = AccessController;
