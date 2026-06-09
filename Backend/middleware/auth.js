const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token Required"
      });
    }

    
    const decoded = jwt.verify(token, "SecretKey");

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token"
    });
  }
};

module.exports = auth;