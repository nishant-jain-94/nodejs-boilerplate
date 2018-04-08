const app = require('../app');
const logger = require('../logger');
const { PORT, APP_NAME } = require('../config');

app.listen(PORT, () => {
  logger.info(`${APP_NAME} listening to on port ${PORT}`);
});
