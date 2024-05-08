const getaccess = (...lists) => {
  return (req, res, next) => {
    if (lists.includes(req.role)) {
      next();
    } else {
      res.status(403).send({ message: "Unable to access" });
    }
  };
};
module.exports = {
  getaccess,
};
