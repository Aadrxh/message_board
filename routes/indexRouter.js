const express = require('express');
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Good to see you!",
    user: "Dhinkachika",
    added: new Date()
  },
  {
    text: "Welcome!",
    user:"system",
    added: new Date()
  }
];


indexRouter.get('/', (req, res) => {
  res.render('index',{title:"Index Page", messages:messages});
});

indexRouter.get('/new', (req, res) => {
    res.render('form',{title:"New Message"});
});

indexRouter.post('/new', (req, res) => {
    const messageText = req.body.text;
    const messageUser = req.body.user || "Anonymous";
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');// Redirect to the index page after adding a new message

});

module.exports = indexRouter;  // Make sure you actually export the router
