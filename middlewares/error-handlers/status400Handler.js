const status400Handler = (err, req, res, next) => {
  if (err.code === 400) {
    res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = status400Handler;
