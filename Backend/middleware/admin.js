const admin = (req, res, next) => {

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Only Admin Can Add Product"
    });
  }

  next();
};

module.exports = admin;