const express = require("express");
const router = express.Router();
const {
  generateTasksFromEmail,
  getTasks,
} = require("../controllers/todoController");

router.post("/tasks", generateTasksFromEmail);
router.get("/tasks", getTasks);

module.exports = router;
