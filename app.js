const YAML = require('yamljs');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const {
  status400Handler,
  status404Handler,
  status500Handler,
} = require('./middlewares/error-handlers');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use('/ping', (req, res) => {
  res.send('pong');
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(status400Handler);
app.use(status500Handler);
app.use(status404Handler);

module.exports = app;
