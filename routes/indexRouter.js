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

module.exports = indexRouter;  // Make sure you actually export the router
