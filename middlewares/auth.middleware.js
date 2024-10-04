const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(501).send({ message: "Access denied. No token provided." });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(501).send({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    res.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
