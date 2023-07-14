const express = require('express');
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {
      if (err) {
        console.log(err);
        data = "No chat exists";
      }
      res.send(
        `${data}<html><head><title>Chat App</title></head><body><form action = "/" method = "POST" onsubmit = "document.getElementById('user').value = localStorage.getItem('username')"><input type = "text" name = "message"><input type = "hidden" name = "username" id = "user"><button type = "submit">Send</button></form></body></html>`
      );
    });
  });
  
  router.post("/", (req, res) => {
    const username = req.body.username;
    const data = req.body.message;
    fs.writeFile(
      "username.txt",
      ` ${username} : ${data} `,
      { flag: "a" },
      (err) => {
        err ? console.log(err) : res.redirect("/");
      }
    );
  });

  module.exports = router;