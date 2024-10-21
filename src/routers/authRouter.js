import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

router.get("/home", async (req, res) => {
  const user = await new User({
    username: "khattab",
    password: "123",
    userOld: 12,
  });
  user.save();
  res.send("home page proooo");
});
export default router;
