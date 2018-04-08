const status500Handler = (err, req, res, next) => {
  if (err.statusCode === 500) {
    res.json({ message: err.message });
  }
  next();
};

module.exports = status500Handler;
