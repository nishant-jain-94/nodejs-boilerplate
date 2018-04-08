const bunyan = require('bunyan');
const { APP_NAME } = require('../config');

const logger = bunyan.createLogger({ name: APP_NAME });

module.exports = logger;
