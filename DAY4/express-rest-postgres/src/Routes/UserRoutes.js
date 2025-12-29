const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

console.log(" UserRoutes.js LOADED");

// test route
router.get("/test", (req, res) => {
  res.send("API working");
});

// auth routes
router.post("/register", userController.register);
router.post("/login", userController.login);

// protected routes
router.get("/users", auth, userController.getUsers);
router.put("/users/:id", auth, userController.updateUser);
router.delete("/users/:id", auth, userController.deleteUser);

module.exports = router;
