const redis = require('../util/redis');

const injectRedis = async (req, res, next) => {
    req.redis = await redis;
    const { client } = req.redis;
    req.redisClient = client;
    next();
};

module.exports = injectRedis;
