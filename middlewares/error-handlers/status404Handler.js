const status404Handler = (req, res) => {
  res.status(404).send({ message: 'Resource Not Found' });
};

module.exports = status404Handler;
