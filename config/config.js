const config = {
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost',
  APP_NAME: process.env.APP_NAME || 'APP',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
};

module.exports = config;
