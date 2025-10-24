const express = require('express');
const app = express();
const path=require('node:path');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const assetsPath = path.join(__dirname, 'public');//this is for static files like css, js, images
app.use(express.static(assetsPath)); //middleware to serve static files

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);


app.listen(port, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("Server listening on PORT: ",port);
});