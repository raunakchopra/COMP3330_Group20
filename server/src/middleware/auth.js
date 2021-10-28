require('dotenv').config();
const jwt = require('jsonwebtoken');

const error = require('../util/error');
const { session: sessionRedis, user: userRedis } = require('../constants/redis');
const { publicKey } = require('../config/keys');
const {
    API_TOKEN,
} = process.env;

const auth = ({ accessService }) => async (req, res, next) => {
    try {
        if (req.header('x-api-token')) {
            const token = req.header('x-api-token');
            // eslint-disable-next-line eqeqeq
            if (token == API_TOKEN) {
                res.locals.authToken = token;
                next();
            }
        } else {
            if (!req.header('Authorization')) {
                throw error.UnauthorizedError();
            }
            const authToken = req.header('Authorization').replace('Bearer ', '');
            const { redis } = req;
            const redisSessionConfig = sessionRedis(authToken);
            const redisSession = await redis.get(redisSessionConfig.key);
            if (!redisSession) {
                const access = await accessService.findOne({
                    query: { token: authToken }
                });
                if (!access) {
                    throw error.UnauthorizedError();
                }

                let user;
                try {
                    user = await jwt.verify(access.token, publicKey, { algorithm: 'RS256' });
                } catch (e) {
                    throw error.UnauthorizedError();
                }

                await redis.set(
                    redisSessionConfig.key,
                    JSON.stringify(user),
                    redisSessionConfig.format,
                    redisSessionConfig.time
                );

                const redisUserConfig = userRedis({ id: user._id });
                await redis.set(
                    redisUserConfig.key,
                    JSON.stringify(user),
                    redisUserConfig.format,
                    redisUserConfig.time
                );

                res.locals.user = user;
                res.locals.isAdmin = user.isAdmin;
                res.locals.isStaff = user.isStaff;
                res.locals.authToken = authToken;
                // console.log('No Redis');
                next();
            } else {
                const user = JSON.parse(redisSession);
                res.locals.user = user;
                res.locals.isAdmin = user.isAdmin;
                res.locals.isStaff = user.isStaff;
                res.locals.authToken = authToken;
                // console.log('Yes Redis');
                next();
            }
        }
    } catch (e) {
        next(e);
    }
};

module.exports = auth;
