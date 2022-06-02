require("dotenv").config();
const jwt = require("jsonwebtoken");
const debug = require("debug")("barkedin:server:middlewares:auth");

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization.includes("Bearer")) {
      throw new Error();
    }
    const token = authorization.replace("Bearer ", "");
    const userId = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
    debug("User authenticated correctly");
    next();
  } catch {
    const customError = new Error("Invalid authentication");
    customError.statusCode = 401;
    customError.customMessage = "Invalid credentials";
    next(customError);
  }
};

module.exports = { auth };
