// utils.js
const jwt = require("jsonwebtoken");
const startServer = (app, port) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
const createResponse = (msg, status, data) => {
  return {
    message: msg,
    status,
    data,
  };
};

const createToken = (body) => {
  return jwt.sign(body, process.env.SECRET, {
    expiresIn: "2d",
  });
};
const decodeToken = (token) => {
  return jwt.decode(token);
};
module.exports = {
  startServer,
  createResponse,
  createToken,
  decodeToken,
};
