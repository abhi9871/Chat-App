const express = require("express");

const bodyParser = require("body-parser");

const loginRoute = require('./routes/login');

const messageRoute = require('./routes/message');

// const LocalStorage = require('node-localstorage').LocalStorage;
// const localStorage = new LocalStorage('./scratch'); // It creates at the time of new instance

const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoute);
app.use(messageRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
