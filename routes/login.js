const express = require('express');

const router = express.Router();

router.get("/login", (req, res) => {
    res.send(`<html>
      <head>
      <title>Chat App</title>
      </head>
      <body>
      <form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
      <input type="text" name="username" placeholder="username" id = "username"><br>
      <button type="submit">Login</button>
    </form>
    </body>
    </html>`);
  });
  
  router.post("/login", (req, res) => {
    res.redirect("/");
  });

  module.exports = router;