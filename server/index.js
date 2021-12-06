require('dotenv').config();

const app = require('./src/app');
const logger = require('./src/util/logger');
const {
    PUBLIC_PORT,
} = process.env;

const application = app();

application.app.listen(PUBLIC_PORT, () => {
    logger.info(`Server is up on port ${process.env.PORT}`);
});
