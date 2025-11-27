const express = require("express");
const { getAllMessages, addMessage } = require("../db/queries");

const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.render("index", { title: "Message Board", messages });
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).send("Internal Server Error");
  }
});

// GET
indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "New Message"});
});

// POST
indexRouter.post("/new", async (req, res) => {
  const messageUser = req.body.user?.trim() || "Anonymous";
  const messageText = req.body.text?.trim();

  try {
    await addMessage(messageUser, messageText);
    res.redirect("/");
  } 
  catch (err) {
    console.error("Error adding message:", err);
    res.status(500).send("Database Error");
  }
});

module.exports = indexRouter;
