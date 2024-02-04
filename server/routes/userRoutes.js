const express = require("express"),
  router = express.Router();
const userController = require("../controllers/userController");
const { createResponse } = require("../utils");

router.post("/sign-up", async (req, res) => {
  try {
    const newUser = await userController.signUp(req.body);
    return res
      .status(201)
      .json(createResponse("Sign up success", 201, newUser));
  } catch (e) {
    return res.status(400).json(createResponse(e.message, 400, e));
  }
});
router.post("/sign-in", async (req, res) => {
  try {
    const accessToken = await userController.signIn(req.body);

    return res
      .status(200)
      .json(createResponse("Sign In success", 200, { accessToken }));
  } catch (e) {
    return res.status(400).json(createResponse(e.message, 400, e));
  }
});

router.get("/me");

module.exports = router;
